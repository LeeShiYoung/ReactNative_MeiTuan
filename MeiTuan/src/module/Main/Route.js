/*
 * @Author: Young
 * @Date: 2019-04-25 19:03:57
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-26 16:25:56
 */
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import HomePage from '../Homepage/index';
import Discover from '../Discover/index';
import color from '../../Common/color';

const HomepageStack = createStackNavigator({
    Home: {
        screen: HomePage.component,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: color.primary,
            },
        })
    }
});

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Discover.component,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: color.primary,
            },
            headerRightContainerStyle: {
                width: 20,
                height: 20
            }
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