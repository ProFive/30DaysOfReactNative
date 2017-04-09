import { DrawerNavigator } from 'react-navigation';

import Home from './Home'
import Profile from './Profile';
import Setting from './Setting';

const Authorized = DrawerNavigator({
    Home: { screen: Home, },
    Profile: { screen: Profile },
    Setting: { screen: Setting },
    //    Logout: { screen: '' },
});
export default Authorized;