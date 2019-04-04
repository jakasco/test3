import React, { Component } from 'react';

const widgetStyle = {
  backgroundColor: 'grey',
  height: '10vh',
  width: '100%',
};

class Widget extends Component {

    render(){
        return(
          <div style={widgetStyle}>
            <p>Wdiget</p>
            <ul>
            <li>asd</li>
            <li>asd</li>
            </ul>
            </div>
        );
    }
}

export default Widget;
