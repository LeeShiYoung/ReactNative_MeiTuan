/*
 * @Author: Young
 * @Date: 2019-04-29 21:15:03
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-29 21:24:24
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import color from '../Common/color';
import common from '../Common/common';

class Separator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<View style={styles.sep}/>);
    }
}

const styles = StyleSheet.create({
    sep: {
        backgroundColor: color.paper,
        height: 0.5,
        width: common.screen.width
    }
})

export default Separator;
