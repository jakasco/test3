import React, { Component } from 'react';
import Single from './../components/single';
import Post_1 from './posts/post_1';
import Post_2 from './posts/post_2';
import Post_3 from './posts/post_3';

const list2 = [<Post_1 />,<Post_2 />,<Post_3 />]

class Posts extends Component {

  render() {
    return (
      <div >
        <h1>Posts</h1>
        <Single />
      </div>
    );
  }
}

export default Posts;
