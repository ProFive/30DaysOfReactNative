import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/profile/Profile';

const Profile = StackNavigator({
    Profile: { screen: ProfileScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Profile',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/contact.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        }
    });
const styles = {
    icon: {
        width: 32,
        height: 32
    }
};

export default Profile;
