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

const ulStyle = {
    listStyleType: 'none'
}

class Categories extends Component {


    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={1224}>
                    <div style={widgetStyle}>
                        <p>Categories</p>
                        <ul style={ulStyle}>
                            <li>Category 1</li>
                            <ul>
                                <li>Category 2</li>
                                <li>Category 2.2</li>
                            </ul>
                        </ul>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={600}>
                    <div style={mobile}>
                        <p>Categories</p>
                        <ul style={ulStyle}>
                            <li>Category 1</li>
                            <ul>
                            <li>Category 2</li>
                            <li>Category 2.2</li>
                            </ul>
                        </ul>
                    </div>
                </MediaQuery>

            </div>
        );
    }
}

export default Categories;
