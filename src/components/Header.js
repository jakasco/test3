import React, { Component } from 'react';

const headerStyle = {
  backgroundColor: 'grey',
  height: '10vh',
  width: '100%',
};

class Header extends Component {

    render(){
        return(
          <div style={headerStyle}>
            <p>Header</p>
            </div>
        );
    }
}

export default Header;
