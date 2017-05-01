import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import IssuesScreen from '../screens/issues/Issues';

const Issues = StackNavigator({
    Issues: { screen: IssuesScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Issues',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/issues.png')}
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

export default Issues;
