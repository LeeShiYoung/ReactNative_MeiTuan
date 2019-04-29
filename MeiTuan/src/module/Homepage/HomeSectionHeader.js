/*
 * @Author: Young
 * @Date: 2019-04-29 16:00:31
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-29 21:09:08
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import color from '../../Common/color';
import {connect} from 'react-redux'
import common from '../../Common/common';

class HomeSectionHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {title} = this.props;

        return (
            <View style={styles.contrainer}>
            <Text style={styles.text}>
                {title}
            </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contrainer: {
        justifyContent: 'center',
        backgroundColor: 'white',
        width: common.screen.width,
        height: 44,
        borderBottomWidth: 0.5,
        borderBottomColor: color.paper,
    },
    text: {
        color: color.gray,
        fontSize: 14,
        justifyContent: 'center',
        marginLeft: 15,
    }
});

export default HomeSectionHeader;
