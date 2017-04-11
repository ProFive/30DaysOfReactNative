import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListContact from '../screens/home/contact/ListContact';
import AddContact from '../screens/home/contact/AddContact';
import EditContact from '../screens/home/contact/EditContact';
import ViewContact from '../screens/home/contact/ViewContact';

const TabContact = StackNavigator({
    List: {
        screen: ListContact, 
        navigationOptions: {
            tabBar: {
                label: 'Contact',
                icon: ({ tintColor }) => <Image source={require('../images/icons/contact.png')} style={[styles.icon, { tintColor }]} />,
            }
        }
    },
    Add: { screen: AddContact },
    Edit: { screen: EditContact },
    View: { screen: ViewContact }
});

const styles = {
    icon: {
        width: 32,
        height: 32
    }
};
export default TabContact;