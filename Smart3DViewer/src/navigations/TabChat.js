import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListChat from '../screens/home/chat/ListChat';
import AddChat from '../screens/home/chat/AddChat';
import EditChat from '../screens/home/chat/EditChat';
import ViewChat from '../screens/home/chat/ViewChat';

const TabChat = StackNavigator({
    List: {
        screen: ListChat,
        navigationOptions: {
            tabBar: {
                label: 'Chat',
                icon: ({ tintColor }) => <Image source={require('../images/icons/chat.png')} style={[styles.icon, { tintColor }]} />,
            }
        }
    },
    Add: { screen: AddChat },
    Edit: { screen: EditChat },
    View: { screen: ViewChat },

});

const styles = {
    icon: {
        width: 32,
        height: 32
    }
};
export default TabChat;