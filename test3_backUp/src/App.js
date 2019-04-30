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
import SimpleMediaQuery from "./components/mediaQuery"
import Post_1 from './components/posts/post_1';
import Post_2 from './components/posts/post_2';
import Post_3 from './components/posts/post_3';

class App extends Component {

  state = {
    test: "test",
    post: 0,
  }
/*
  setPost(post) {
    this.setState({
      ...this.state,
      post
    });
  }
*/

setPost = () => {
  this.setState({post: 1});
  console.log("This state post: "+this.state.post);
}

  componentDidMount(){

  }

  render() {

    const isPost = this.state.post;
    if(isPost==false){

    }else{

    }

    return (
      <div className="App">
        <Header />
          <Router>
          <NavMenu />
            <p>State: {this.state.post}</p>
          {/*   <Nav navProps={this.state.test}/> */}
            <div className="container">
              <Route exact path="/" component={Single}/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/posts" component={Posts}/>

              <div>
              <Single isPost={this.state.post}/>
                <Route path="/post_1"  render={(props) => (
                    <Post_1 {...props} setPost={this.setPost}/>
                )}/>
              <Route path="/post_2" component={Post_2}/>
              <Route path="/post_3" component={Post_3}/>
              </div>
            </div>
          </Router>
          <Footer />
      </div>
    );
  }
}

export default App;
