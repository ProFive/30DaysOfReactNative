/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */

import {StackNavigator} from 'react-navigation';

import Login from '../screens/Login';
import Chat from '../screens/Chat';

const RootNavigation = StackNavigator({
    Unauthorized: {
        screen: Login
    },
    Authorized: {
        screen: Chat
    }
}, {
    headerMode: 'screen'
});
export default RootNavigation;
