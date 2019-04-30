import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Single from './../single';

class Post_1 extends Component {

    setPost = (e) => {
        console.log("Change to "+true);
        alert("Change!");
        this.props.setPost(true,e);
    }

    componentDidMount(){
       // console.log("Props:, ",this.props.setPost);
        this.props.setPost();
    }

  render() {

    return (
      <div>

        <h1>Post 1</h1>
        <p>Hello this post is first post. <Link to='/home'> Just </Link> testing if the link works.</p>

      </div>
    );
  }
}

export default Post_1;
