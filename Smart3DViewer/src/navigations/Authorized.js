import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import Plans from './Plans'
import Profile from './Profile';
import Setting from './Setting';
import DrawerContent from '../components/DrawerContent';

const Authorized = DrawerNavigator({
    Plans: { screen: Plans, },
    Profile: { screen: Profile },
    Setting: { screen: Setting },
    //    Logout: { screen: '' },
}, {
        contentComponent: (props) => <DrawerContent {...props} />
    });
export default Authorized;