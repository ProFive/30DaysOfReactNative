/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */

import {StackNavigator} from 'react-navigation';

import Authorized from  './Authorized';
import Login from '../screens/Login';

const Root = StackNavigator({
    // Unauthorized: {
    //     screen: Login
    // },
    Authorized: {
        screen: Authorized
    }
}, {
    headerMode: 'screen',
    navigationOptions:{
        header:{
            visible: false
        }
    }
});
export default Root;
