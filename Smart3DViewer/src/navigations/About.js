import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AboutScreen from '../screens/about/About';

const About = StackNavigator({
    About: { screen: AboutScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'About',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/about.png')}
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

export default About;
