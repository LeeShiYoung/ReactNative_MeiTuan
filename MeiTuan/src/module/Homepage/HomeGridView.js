/*
 * @Author: Young
 * @Date: 2019-04-28 16:14:14
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-28 17:06:16
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import common from '../../Common/common';
import HomeGridItem from './HomeGridItem';
import {connect} from 'react-redux'
import {fetchGrid} from './actions';

class HomeGridView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this
            .props
            .fetchGrid();
    }

    render() {
        const {gridInfos} = this.props;
        const items = gridInfos.map((grid, i) => (<HomeGridItem
            title={grid.title}
            subTitle={grid.subTitle}
            icon={grid.icon}
            key={i}/>));

        return (
            <View style={styles.container}>
                {items}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: common.screen.width,
        height: 180
    }
})

const mapStateToProps = (state) => ({gridInfos: state.homepageReudcer.homepage.gridInfos});

const mapDispatchToProps = (dispatch) => ({
    fetchGrid: () => {
        dispatch(fetchGrid());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeGridView)
