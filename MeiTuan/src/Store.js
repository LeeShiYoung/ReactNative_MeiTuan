/*
 * @Author: Young 
 * @Date: 2019-04-26 10:19:56 
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-28 17:54:14
 */

import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import homepageReudcer from './module/Homepage/reducer';

import logger from 'redux-logger'
import reducepromisemiddleware from 'redux-promise-middleware';
// import axiosMiddleware from 'redux-axios-middleware';



const reducers = combineReducers({
    homepageReudcer
});

export default createStore(reducers, applyMiddleware(reducepromisemiddleware, logger));