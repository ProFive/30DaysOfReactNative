import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NotificationScreen from '../screens/notification/Notification';

const Notification = StackNavigator({
    Notification: { screen: NotificationScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Notification',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/notification.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        }
    });
const styles = {
    icon: {
        width: 24,
        height: 24
    }
};

export default Notification;
