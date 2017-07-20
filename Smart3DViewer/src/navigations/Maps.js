import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapsScreen from '../screens/maps/Maps';

const Maps = StackNavigator({
    Maps: { screen: MapsScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Maps',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/maps.png')}
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

export default Maps;
