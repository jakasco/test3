import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ListItem} from "../Nav";
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import MediaQuery from 'react-responsive';


const widgetStyle = {
  backgroundColor: 'grey',
  height: '26vh',
  width: '100%',

};

const mobile = {
    backgroundColor: 'cyan',
    height: '26vh',
    width: '100%',
}

const ulStyle = {
    listStyleType: 'none'
}

class RecentPosts extends Component {



    render(){
        return(
          <div>
              <MediaQuery minDeviceWidth={1224}>
          <div style={widgetStyle}>
            <p>{this.props.title}</p>
            <ul style={ulStyle}>
                <li><Link to={"/"+this.props.posts.post1}>{this.props.posts.post1}</Link></li>
                <li>{this.props.posts.post2}</li>
                <li>{this.props.posts.post3}</li>
                <li>{this.props.posts.post4}</li>
                <li>{this.props.posts.post5}</li>
            </ul>
            </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={600}>
                  <div style={mobile}>
                      <p>{this.props.title}</p>
                      <ul style={ulStyle}>
                          <li><Link to={"/"+this.props.posts.post1}>{this.props.posts.post1}</Link></li>
                          <li>{this.props.posts.post2}</li>
                          <li>{this.props.posts.post3}</li>
                          <li>{this.props.posts.post4}</li>
                          <li>{this.props.posts.post5}</li>
                      </ul>
                  </div>
              </MediaQuery>

          </div>
        );
    }
}

export default RecentPosts;
