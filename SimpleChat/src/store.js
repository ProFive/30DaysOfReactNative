/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */


 import { createStore, applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';
 import logger from 'redux-logger';
 import reducers from './reducers';

 const store = createStore(reducers, applyMiddleware(thunk));

 export default store;
