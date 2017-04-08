/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */


 import RootNavigation from '../navigations/RootNavigation';

 export default (state, action) => {
     const newState = RootNavigation.router.getStateForAction(action, state);
     return newState || state;
 };
