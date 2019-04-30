import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Post_3 extends Component {

    render() {
        return (
            <div>
                <h1>Post 3</h1>
                <p>Hello this post is first post. <Link to='/post_2'> Just </Link> testing if the link works.</p>

            </div>
        );
    }
}

export default Post_3;
