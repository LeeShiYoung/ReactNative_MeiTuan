/*
 * @Author: Young
 * @Date: 2019-04-26 17:21:46
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-26 17:22:06
 */

import React, {PureComponent} from 'react'
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import common from '../../Common/common';


export default class HomeMenuItem extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image style={styles.icon} source={this.props.icon} resizeMode='contain'/>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: common.screen.width / 5,
        height: common.screen.width / 5
    },
    icon: {
        width: common.screen.width / 9,
        height: common.screen.width / 9,
        margin: 5
    }
})