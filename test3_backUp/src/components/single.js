import React, { Component } from 'react';
import Content from './content';
import RecentPosts from './widgets/RecentPosts';
import MediaQuery from 'react-responsive';
import NewsLetter from './widgets/NewsLetter';
import Categories from './widgets/Categories';
import ContentOfPost  from './contentOfPost';
import Post_1 from './posts/post_1';
import Post_2 from './posts/post_2';
import Post_3 from './posts/post_3';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavMenu from "../App";
import Home from "../pages/home";
import About from "../pages/about";
import Posts from "../pages/posts";

const contentStyle = {
  width: '80%',
  float: 'left',
}

const widgetStyle = {
   width: '20%',
   backgroundColor: 'white',
   float: 'left',
}

const contentStyleMobile = {
    width: '100%',
}

const widgetStyleMobile = {
    width: '100%',
    backgroundColor: 'white',
}

const list2 = [<Post_1 />,<Post_2 />,<Post_3 />]

class Single extends Component {

    state = {
        id: 0,
        widgetTitle: "Recent Posts",
        posts: {
            post1: "1 post",
            post2: "2 post",
            post3: "3 post",
            post4: "4 post",
            post5: "5 post",
        }
    }

    changeContentNext = (num) => {
        num++;
        this.setState({id: 1});
        console.log("id: "+this.state.id);
    }

    changeContentPrevious = (num) => {
        num--;
        this.setState({id: 0});
        console.log("id: "+this.state.id);
    }

    render(){
        console.log(this.props.isPost);
        if(this.props.isPost==0){
            return(
                <div>
                    <p>Empty single page</p>
                </div>
            );
        }else{

        return(
            <div>
                <MediaQuery minDeviceWidth={1224}>
                <div style={contentStyle}>
                    {/*     <p>Single page</p>
                <button onClick={(evt) =>this.changeContentPrevious(this.state.id,evt)}>Back</button>
                <button onClick={(evt) =>this.changeContentNext(this.state.id,evt)}>Next</button>
            <Content id={this.state.id}/>*/}
            {list2[1]}
            </div>


                    <div style={widgetStyle}>
                        <RecentPosts title={this.state.widgetTitle} posts={this.state.posts}/>
                        <NewsLetter />
                        <Categories />
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={600}>
                    <div style={contentStyleMobile}>
                        <p>Single page</p>
                        <button onClick={(evt) =>this.changeContentPrevious(this.state.id,evt)}>Back</button>
                        <button onClick={(evt) =>this.changeContentNext(this.state.id,evt)}>Next</button>
                        <Content id={this.state.id}/>
                    </div>
                    <div style={widgetStyleMobile}>
                        <RecentPosts title={this.state.widgetTitle} posts={this.state.posts}/>
                        <NewsLetter />
                        <Categories />
                    </div>
                </MediaQuery>
            </div>
        );}
    }
}

export default Single;
