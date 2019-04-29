/*
 * @Author: Young 
 * @Date: 2019-04-29 18:15:46 
 * @Last Modified by:   Young 
 * @Last Modified time: 2019-04-29 18:15:46 
 */

import Route from './src/module/Main/Route';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/Store';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Route/>
            </Provider>
        );
    }
}

export default App;