import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TitlebarGridList from './../components/gridOfPosts';

class Home extends Component {

  render() {
    return (
      <div >
        <h1>Home Page</h1>
          <TitlebarGridList />
      </div>
    );
  }
}

export default Home;
