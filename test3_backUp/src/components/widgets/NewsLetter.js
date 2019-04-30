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

class NewsLetter extends Component {

    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={1224}>
                    <div style={widgetStyle}>
                        <p>Join the newsLetter</p>

                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={600}>
                    <div style={mobile}>
                        <p>Join The newsLetter!</p>
                    </div>
                </MediaQuery>

            </div>
        );
    }
}

export default NewsLetter;
