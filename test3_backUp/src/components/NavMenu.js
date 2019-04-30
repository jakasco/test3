import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import {Home, ExitToApp, AccountBox, Forward, ArrowUpward, ArrowDownward} from '@material-ui/icons/';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

const parentStyle = {
  backgroundColor: "#c3c3c3",
  position: "-webkit-sticky",
  position: "sticky",
  top: "0",
  zIndex: 2,
}

const divLeft = {
  float: 'right',
  width: '10%'
}

const buttonStyle = {
  backgroundColor: 'white'
}

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div style={parentStyle} className={classes.root}>

        <div style={buttonStyle} >
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            Menu
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                    <ClickAwayListener onClickAway={this.handleClose}>
                  <List>
                    <ListItem  button component={Link} to="/home" onClick={this.handleClose}>
                       <ListItemIcon>
                          <Home />
                       </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem button component={Link} to="/About" onClick={this.handleClose}>
                       <ListItemIcon>
                          <Home />
                       </ListItemIcon>
                        <ListItemText primary='About' />
                    </ListItem>
                    <ListItem button component={Link} to="/Posts" onClick={this.handleClose}>
                       <ListItemIcon>
                          <Home />
                       </ListItemIcon>
                        <ListItemText primary='Posts' />
                    </ListItem>
                  </List>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <div style={divLeft}>
        <List>
        <ListItem button component={Link} to="/#">
           <ListItemIcon>
              <ArrowDownward />
           </ListItemIcon>
            <ListItemText/>
        </ListItem>
      </List>
        </div>
        <div style={divLeft}>
        <List>
        <ListItem button component={Link} to="/#adipiscing">
           <ListItemIcon>
              <ArrowUpward />
           </ListItemIcon>
            <ListItemText/>
        </ListItem>
      </List>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);
