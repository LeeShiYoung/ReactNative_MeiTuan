/*
 * @Author: Young 
 * @Date: 2019-05-10 19:47:24 
 * @Last Modified by: Young
 * @Last Modified time: 2019-05-10 19:58:39
 */

import {
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import AppRouteConfigs from './Route';
import {
  connect
} from 'react-redux';

const AppContainer = createReduxContainer(AppRouteConfigs);

const mapStateToProps = (state) => ({
  state: state.navigationReducer,
});

const AppWithNavigationState = connect(mapStateToProps)(AppContainer);

export default AppWithNavigationState;