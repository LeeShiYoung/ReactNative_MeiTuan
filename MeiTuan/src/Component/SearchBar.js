/*
 * @Author: Young
 * @Date: 2019-04-26 12:09:51
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-30 10:55:11
 */

import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {searchBarFetch} from '../module/Homepage/actions';
import common from '../Common/common';
import color from '../Common/color';

class SearchBar extends Component {

    componentDidMount() {
        this
            .props
            .fetchSearchBar();
    }

    render() {
        const {searchBarText} = this.props;
        return (
            <TouchableOpacity style={styles.searchBar}>
                <Image
                    resizeMethod={'resize'}
                    source={require('../../src/img/home/search_icon.png')}
                    style={styles.searchIcon}/>
                <Text style={styles.searchText}>{searchBarText}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: common.screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        alignSelf: 'center',
    },

    searchIcon: {
        width: 16,
        height: 16,
        marginLeft: 10,
    },

    searchText: {
        color: color.gray,
        position: 'relative',
        left: 10,
        width: common.screen.width * 0.7 - 46
    }
    
})

const mapStateToProps = (state) => ({searchBarText: state.homepageReudcer.searchBar.text});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchSearchBar: () => {
        console.log(ownProps);
        dispatch(searchBarFetch('Young'));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
