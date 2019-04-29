/*
 * @Author: Young
 * @Date: 2019-04-26 17:18:24
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-29 15:57:20
 */

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import PageControl from 'react-native-page-control'
import HomeMenuItem from './HomeMenuItem';
import common from '../../Common/common';
import {connect} from 'react-redux'
import color from '../../Common/color';
import {updateHomePageMenuPage} from './actions';
import HomeGridItem from './HomeGridItem';
import HomeGridView from './HomeGridView';

class HomeMenu extends Component {

    render() {

        const {menuInfos, currentPage} = this.props;

        const items = menuInfos.map(({title, icon}) => (<HomeMenuItem title={title} icon={icon} key={title}/>));

        const pageCount = Math.ceil(items.length / 10);
        let menuViews = [];
        for (let i = 0; i < pageCount; i++) {
            const itemSlices = items.slice(i * 10, i * 10 + 10);
            const view = <View style={styles.itemsView} key={i}>
                {itemSlices}
            </View>
            menuViews.push(view);
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={this._onScroll}>
                    {menuViews}
                </ScrollView>
                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={currentPage}
                    currentPageIndicatorTintColor={color.primary}
                    pageIndicatorTintColor={color.gray}/>
                <View style={styles.line}/>
                <HomeGridView/>
                <View style={styles.line}/>
            </View>

        );
    }

    _onScroll = (event) => {
        const x = event.nativeEvent.contentOffset.x;
        const page = Math.round(x / common.screen.width);

        const {currentPage, setCurrentPage} = this.props;
        if (currentPage !== page) {
            setCurrentPage(page);
        }

        const ws = new WebSocket('');
        ws.onmessage = () => {

        }
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: common.screen.width
    },
    pageControl: {
        margin: 10
    },
    line: {
        backgroundColor: color.paper,
        width: common.screen.width,
        height: 10,
    }
});

const mapStateToProps = (state) => ({menuInfos: state.homepageReudcer.homepage.menuInfo.items, currentPage: state.homepageReudcer.homepage.menuInfo.currentPage});
const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => {
        dispatch(updateHomePageMenuPage(page));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu)
