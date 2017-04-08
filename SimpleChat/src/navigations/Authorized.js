import { DrawerNavigator } from 'react-navigation';

import Home from './Home'
import Profile from '../screens/profile/Profile';
import Setting from '../screens/setting/Setting';

const Authorized = DrawerNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile },
    Setting: { screen: Setting },
//    Logout: { screen: '' },
});
export default Authorized;