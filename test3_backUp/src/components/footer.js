import React, { Component } from 'react';

const footerStyle = {
  backgroundColor: 'grey',
  width: '100%',
  bottom: 0,
  float: 'right'
};

class Footer extends Component {

    render(){
        return(
          <div style={footerStyle}>
            <p>Footer</p>
            </div>
        );
    }
}

export default Footer;
