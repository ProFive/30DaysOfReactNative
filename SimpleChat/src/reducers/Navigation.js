/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */


 import Root from '../navigations/Root';

 export default (state, action) => {
     const newState = Root.router.getStateForAction(action, state);
     return newState || state;
 };
