import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Post_2 extends Component {

    render() {
        return (
            <div>
                <h1>Post 2 and Single first Div</h1>
                <p>Hello this post is first post. TO psot 1 <Link to='/post_1'> Just </Link> testing if the link works.</p>

            </div>
        );
    }
}

export default Post_2;
