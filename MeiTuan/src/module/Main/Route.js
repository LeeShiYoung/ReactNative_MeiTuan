/*
 * @Author: Young
 * @Date: 2019-04-25 19:03:57
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-30 11:04:51
 */
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import {Platform} from 'react-native';
import HomePage from '../Homepage/index';
import Discover from '../Discover/index';
import color from '../../Common/color';


const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
const HomepageStack = createStackNavigator({
    Home: {
        screen: HomePage.component,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: color.primary,
            },
            headerTitleContainerStyle:{
                left: TITLE_OFFSET,
                right: TITLE_OFFSET,
              }
        })
    }
});

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Discover.component,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: color.primary,
                textAlign: 'center'
            },
        })
    }
});

const Route = createAppContainer(createBottomTabNavigator({
    HomepageStack: {screen: HomepageStack,
        navigationOptions: {
            tabBarLabel: '首页'
        }},
    DiscoverStack: {screen: DiscoverStack,
        navigationOptions: {
            tabBarLabel: '发现'
        }}
}));

export default Route;