/*
 * @Author: Young
 * @Date: 2019-04-28 16:07:54
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-30 10:27:19
 */

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import common from '../../Common/common';
import color from '../../Common/color';

class HomeGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {title, subTitle, icon, color} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={[styles.textTop, {color: color}]}>
                        {title}
                    </Text>
                    <Text style={styles.textBottom}>
                        {subTitle}
                    </Text>
                </View>
                <Image style={styles.image} source={{uri: icon}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: common.screen.width / 2,
        borderWidth: 0.5,
        borderColor: color.paper,
    },
    left: {
        justifyContent: 'center'
    },
    textTop: {
        fontSize: 15,
        color: '#222222',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textBottom: {
        marginTop: 5,
        fontSize: 14,
        color: '#222222',
    },
    image: {
        width: common.screen.width / 5,
        height: common.screen.width / 5,
        backgroundColor: color.paper,
        margin: 10,
        borderRadius: common.screen.width / 5 / 2,
    }

})

export default HomeGridItem;
