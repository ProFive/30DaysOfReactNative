/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */
import {LOGIN, LOGOUT} from "../actions/types"
const INITIAL = {
    loggedIn: false,
    user: null
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case LOGIN:
            return { loggedIn: true, user: action.payload };
        case LOGOUT:
            return INITIAL;
        default:
            return state;
    }
};
