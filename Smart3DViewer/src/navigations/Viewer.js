import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewerScreen from '../screens/viewer/Viewer';

const Viewer = StackNavigator({
    Viewer: { screen: ViewerScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Viewer',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/viewer.png')}
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

export default Viewer;
