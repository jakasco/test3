import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Post_1 extends Component {

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
