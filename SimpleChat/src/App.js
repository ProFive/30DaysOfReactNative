/**
 * @Author: Nani
 * @Date:   04-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {Provider} from 'react-redux';

import Login from './screens/Login';
import Chat from './screens/Chat';

import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}
export default App;
