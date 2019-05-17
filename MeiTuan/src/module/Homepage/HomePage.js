/*
 * @Author: Young
 * @Date: 2019-04-25 18:48:57
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-30 12:53:58
 */

import React, {Component} from 'react';
import {View, SectionList, StyleSheet, Platform} from 'react-native';
import {connect} from 'react-redux';
import SearchBar from '../../Component/SearchBar';
import {homePageFetch} from './actions';
import NavigationItem from '../../Component/NavigationItem';
import HomeMenu from './HomeMenu';
import color from '../../Common/color';
import HomeSectionHeader from './HomeSectionHeader';
import HomeCell from './HomeCell';
import Separator from '../../Component/Separator'

class HomePage extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: <SearchBar/>,
        headerRight: <NavigationItem
            icon={require('../../../src/img/mine/icon_navigation_item_message_white.png')}/>,
        
    });

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this
            .props
            .homePageFetch();
    }

    render() {
        const {sections} = this.props;
        return (
            <View style={styles.container}>
                <SectionList
                    style={styles.list}
                    ListHeaderComponent={< HomeMenu />}
                    sections={sections}
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._separatorComponent}/>

            </View>
        );
    }

    _renderSectionHeader = ({section}) => (<HomeSectionHeader title={section.title}/>)

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => (<HomeCell
        info={{
        title: item.author_name,
        subTitle: item.title,
        price: item.date,
        icon: item.thumbnail_pic_s
    }} onPress={this._cellonPress}/>);

    _separatorComponent = () => (<Separator/>);

    _cellonPress = () => {
        console.log(this.props)
        this.props.navigation.navigate('WebView')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        backgroundColor: color.paper
    }
})

const mapStateToProps = (state) => (
    {sections: state.homepageReudcer.homepage.sections}
    
    );

const mapDispatchToProps = (dispatch, ownProps) => ({
    homePageFetch: () => {
        dispatch(homePageFetch(''));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
