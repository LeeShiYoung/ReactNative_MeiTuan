/*
 * @Author: Young
 * @Date: 2019-04-30 12:38:50
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-30 13:37:22
 */

import React, {Component} from 'react';
import {View, Platform, StyleSheet} from 'react-native';

const {requireNativeComponent} = require('react-native');
const NativeWebView_iOS = requireNativeComponent('NativeWebView_iOS');

class NativeWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return Platform.OS === 'ios' ? (<NativeWebView_iOS style={styles.container}/>) : (<View style={{backgroundColor: 'red', flex: 1}}></View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default NativeWebView;
