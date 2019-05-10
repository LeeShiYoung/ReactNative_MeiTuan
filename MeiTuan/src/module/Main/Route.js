/*
 * @Author: Young
 * @Date: 2019-04-25 19:03:57
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-30 14:09:01
 */
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import {HomePage, NativeWebView} from '../Homepage/index';
import Discover from '../Discover/index';
import color from '../../Common/color';

const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

const HomepageStack = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: color.primary
            },
            headerTitleContainerStyle: {
                left: TITLE_OFFSET,
                right: TITLE_OFFSET
            },
        })
    },

    WebView: {
        screen: NativeWebView,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'white'
            },
        })
    }
}, {
    initialRouteName: 'Home'
});

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Discover.component,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: color.primary,
                textAlign: 'center'
            }
        })
    }
});

const AppRouteConfigs = createBottomTabNavigator({
    HomepageStack: {
        screen: HomepageStack,
        navigationOptions: {
            tabBarLabel: '首页'
        }
    },
    DiscoverStack: {
        screen: DiscoverStack,
        navigationOptions: {
            tabBarLabel: '发现'
        }
    }
})

export default AppRouteConfigs;