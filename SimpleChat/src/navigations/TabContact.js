import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListContact from '../screens/home/contact/ListContact';
import Conversation from '../screens/home/contact/Conversation';

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
    Conversation: { screen: Conversation },
});

const styles = {
    icon: {
        width: 32,
        height: 32
    }
};
export default TabContact;