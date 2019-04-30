import React, { Component } from 'react';
import Post_1 from './posts/post_1';
import Post_2 from './posts/post_2';
import Post_3 from './posts/post_3';

const list = {
    post1: <Post_1 />,
    post2: <Post_2 />,
    post3: <Post_3 />,
}

const list2 = [<Post_1 />,<Post_2 />,<Post_3 />]

class ContentOfPost extends Component {



   render() {
        return (
            <div >
                <h1>Content of Posts</h1>
               {list2[1]}
                <p>Post 1?</p>
            </div>
        );
    }
}

export default ContentOfPost;
