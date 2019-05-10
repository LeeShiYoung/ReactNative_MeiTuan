/*
 * @Author: Young 
 * @Date: 2019-04-29 18:15:46 
 * @Last Modified by: Young
 * @Last Modified time: 2019-05-10 19:50:08
 */

import Route from './src/module/Main/Route';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/Store';
import AppWithNavigationState from './src/module/Main/AppWithNavigationState';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}

export default App;