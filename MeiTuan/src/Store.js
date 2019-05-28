/*
 * @Author: _coderYoung
 * @Date: 2019-05-11 20:57:05
 * @LastEditTime: 2019-05-17 18:30:10
 * @LastEditors: _coderYoung
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
import AppRouteConfigs from './module/Main/Navigator';
import  navigationReducer from "../src/module/Main/NavigationReducer";

// const navigationReducer = createNavigationReducer(AppRouteConfigs);

const reducers = combineReducers({
    homepageReudcer,
    navigationReducer
});

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware( state => state.navigationReducer);

export default createStore(reducers, applyMiddleware(reducepromisemiddleware, reactNavigationReduxMiddleware, logger));