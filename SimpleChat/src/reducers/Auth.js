/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */
import {LOGIN, LOGOUT} from "../actions/types"
const INIIAL = {
    loggedIn: false,
    user: null
};

export default(state = INIIAL, action) => {
    switch (action.type) {
        case LOGIN:
            return {loggedIn: true, user: action.payLoad};
        case LOGOUT:
            return INIIAL;
        default:
            return state;
    }
};
