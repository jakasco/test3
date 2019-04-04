import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Single from './components/single';
import Footer from './components/footer';
import Header from './components/Header';
import Nav from './components/Nav';
import NavMenu from './components/NavMenu';
import TitlebarGridList from './components/gridOfPosts';
import Home from './pages/home';
import About from './pages/about';
import Posts from './pages/posts';

class App extends Component {

  state = {
    test: "test"
  }

  render() {
    return (
      <div className="App">
        <Header />
          <Router>
          <NavMenu />
          {/*   <Nav navProps={this.state.test}/> */}
            <div className="container">
              <Route exact path="/" component={Single}/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
                <Route path="/posts" component={Posts}/>
            </div>
          </Router>
          <Footer />
      </div>
    );
  }
}

export default App;
