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
import Workspace from './Workspace';
import Contact from './Contact';
import Chat from './Chat';

export default combineReducers({
  auth: Auth,
  nav: Navigation,
  workspace: Workspace,
  contact: Contact,
  chat: Chat
});
