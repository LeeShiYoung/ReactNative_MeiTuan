/*
 * @Author: Young
 * @Date: 2019-04-25 18:48:49
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-26 13:37:22
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import common from '../../Common/common';
import {connect} from 'react-redux'

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.detail}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({detail: state.homepageReudcer.homepage.data});

export default connect(mapStateToProps)(Discover)
