import React, { Component } from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import {Home, ExitToApp, AccountBox, Forward} from '@material-ui/icons/';

const menuStyle = {
  float: "left"
}

const ulStyle = {
  listStyleType: 'none'
}

class NavBar extends Component {

    render(){
        return(
          <div>
            <p>Menu</p>
            <ul style={ulStyle}>
            <li style={menuStyle}>Home</li>
            <li style={menuStyle}>About</li>
            <li style={menuStyle}>Contact</li>
            </ul>
            </div>
        );
    }
}

export default NavBar;
