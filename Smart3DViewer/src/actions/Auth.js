/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */
import { NavigationActions } from 'react-navigation';
import { LOGIN, LOGOUT } from './types';

export const signInUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({ type: SIGN_IN_SUCCESS, payload: user });

      dispatch(reset('signin'));

      Actions.post();
    })
    .catch((error) => { dispatch({ type: SIGN_IN_FAILURE, payload: authFailMessage(error.code) }); });
};

export const loginSuccess = (user) => {
    console.log("loginSuccess:", user);
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: user
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Authorized',
                })
            ],
        });
        dispatch(resetNavigator);
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Unauthorized',
                })
            ],
        });
        dispatch(resetNavigator);
    }
};
