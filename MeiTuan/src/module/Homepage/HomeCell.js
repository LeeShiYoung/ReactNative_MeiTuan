/*
 * @Author: Young
 * @Date: 2019-04-29 20:28:43
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-30 10:15:57
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import common from '../../Common/common';
import color from '../../Common/color';

class HomeCell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {title, subTitle, price, icon} = this.props.info;
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:icon}}/>
                <View style={styles.right}>
                    <Text style={styles.title} ellipsizeMode={'middle'} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={styles.subTitle} ellipsizeMode={'tail'} numberOfLines={1}>
                        {subTitle}
                    </Text>
                    <Text style={styles.price}>
                        {price}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    right: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
        width: common.screen.width - 40 - common.screen.width / 5
    },

    image: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
        width: common.screen.width / 5,
        height: common.screen.width / 5,
        borderRadius: 5
    },

    title: {
        fontSize: 15,
        color: '#222222',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subTitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#222222',
    },
    price: {
        marginTop: 8,
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 14,
    }

});
export default HomeCell;
