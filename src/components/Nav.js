import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import {Home, ExitToApp, AccountBox, Forward} from '@material-ui/icons/';

const menuStyle = {
  float: "left"
}

const listStyle = {
  width: "20%",
  backgroundColor: "cyan"
}

const Nav = (props) => {
  return (
      <nav style={listStyle}>
        <List>
          <ListItem  button component={Link} to="/">
             <ListItemIcon>
                <Home />
             </ListItemIcon>
              <ListItemText primary='Home' />
          </ListItem>
          <ListItem button component={Link} to="/About">
             <ListItemIcon>
                <Home />
             </ListItemIcon>
              <ListItemText primary='About' />
          </ListItem>
          <ListItem button component={Link} to="/Posts">
             <ListItemIcon>
                <Home />
             </ListItemIcon>
              <ListItemText primary='Posts' />
          </ListItem>
        </List>
      </nav>
  );
};

Nav.propTypes = {
  checkLogin: PropTypes.func,
};

export default Nav;
