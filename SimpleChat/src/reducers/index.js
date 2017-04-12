/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */

import { combineReducers } from 'redux';

import Auth from './Auth';
import Navigation from './Navigation';
import Contact from './Contact';
import Chat from './Chat';

export default combineReducers({
  authentication: Auth,
  nav: Navigation,
  contact: Contact,
  chat: Chat
});
