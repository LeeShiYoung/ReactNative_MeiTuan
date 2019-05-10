/*
 * @Author: Young 
 * @Date: 2019-05-10 19:39:47 
 * @Last Modified by:   Young 
 * @Last Modified time: 2019-05-10 19:39:47 
 */
/*
 * @Author: Young 
 * @Date: 2019-04-26 10:19:56 
 * @Last Modified by: Young
 * @Last Modified time: 2019-05-05 16:03:37
 */

import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import homepageReudcer from './module/Homepage/reducer';

import logger from 'redux-logger'
import reducepromisemiddleware from 'redux-promise-middleware';
import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';
import AppRouteConfigs from './module/Main/Route';

const navigationReducer = createNavigationReducer(AppRouteConfigs);

const reducers = combineReducers({
    homepageReudcer,
    navigationReducer
});

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
    state => state.nav,
  );

export default createStore(reducers, applyMiddleware(reducepromisemiddleware, reactNavigationReduxMiddleware, logger));