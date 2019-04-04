import React, { Component } from 'react';
import Post_1 from './posts/post_1';

function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}

const divStyle = {
/*  overflow: "scroll",*/
  minHeight: "70vh",
  backgroundColor: 'cyan'
}


class Content extends Component {

    state = {
        thisContent: 'empty',
        rendered: 'empty',
        ren: 'empty'
    }

    renderText(jsonDetails) {

      if(jsonDetails.includes('<linkki>')){
//        console.log("asd");
      }

       let parts = jsonDetails.split('/s') // re is a matching regular expression
       for (let i = 1; i < parts.length; i += 2) {
         parts[i] = <a key={'link' + i} href={parts[i]}>{parts[i]}</a>
       }
    //   console.log("partsS: ",parts);
       return parts
     }

     re = (where,name) => {
        let link = <a key={'link'} href={where}>{name}</a>
        console.log("linkkki: ",link);
        return link;
     }




     replaceLinks = (jsonDetails) => {
  //    let str = jsonDetails.replace(/abc/g, 'linkki');
  //  let find = 'abc';
  //  let re = new RegExp(find, 'g');
console.log("1: "+jsonDetails);
  //  let str = str.replace(re, '');
    let b = jsonDetails.replace(/<linkki>/g, 'asd');
    console.log("2: "+b);
    return b;
     }

    createMarkup(toHtml) {
        return {__html: toHtml};
    }

    getContent = () => {
        fetch('package.json').then(response => response.json()).then(json=> {
            console.log(json);
            let a = this.replaceLinks(json[0].details);
            console.log("a::: ",a);

            let map = {
            '<linkki1>' : this.re('/','Linkkii'),
            '<linkki2>' : '2',
            '<linkki3>' : '3'
            };
            let new2 = replaceAll(json[0].details, map);
            console.log("new2 "+new2);
            this.setState({ren:  new2}); //vanha a

            //
            this.setState({rendered:  json[0].details})
            this.setState({thisContent:  json});
            console.log("asd ",this.state.thisContent);
        });
    };

    componentDidMount() {
        this.getContent();
        this.re();
    }


    render(){
        return(

          <div style={divStyle} >
            <div dangerouslySetInnerHTML={{__html: this.state.thisContent[this.props.id].details}}>

            </div>
            </div>
        );
    }
}

export default Content;
