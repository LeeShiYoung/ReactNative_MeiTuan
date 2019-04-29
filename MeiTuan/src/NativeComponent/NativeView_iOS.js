/*
 * @Author: Young
 * @Date: 2019-04-28 13:05:50
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-28 13:51:48
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {requireNativeComponent} from 'react-native';

const NativeView= requireNativeComponent('NativeView_iOS');

class NativeView_iOS extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<NativeView style={{
            width: 100,
            height: 200
        }}/>);
    }
}

export default NativeView_iOS;
