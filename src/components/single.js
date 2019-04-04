import React, { Component } from 'react';
import Content from './content';
import Widget from './widget';

const contentStyle = {
  width: '80%',
  float: 'left',
}

const widgetStyle = {
   width: '20%',
   backgroundColor: 'white',
   float: 'left',
}

class Single extends Component {

    state = {
        id: 0,
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
        return(
            <div>
            <div style={contentStyle}>
            <p>Single page</p>
                <button onClick={(evt) =>this.changeContentPrevious(this.state.id,evt)}>Back</button>
                <button onClick={(evt) =>this.changeContentNext(this.state.id,evt)}>Next</button>
            <Content id={this.state.id}/>
            </div>

            <div style={widgetStyle}>
            <p>Widgets</p>
            <Widget />
            </div>
            </div>
        );
    }
}

export default Single;
