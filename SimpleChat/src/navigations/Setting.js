import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SettingScreen from '../screens/setting/Setting';

const Setting = StackNavigator({
    Setting: { screen: SettingScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Setting',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/gear.png')}
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

export default Setting;
