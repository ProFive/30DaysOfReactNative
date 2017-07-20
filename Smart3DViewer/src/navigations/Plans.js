import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlansScreen from '../screens/plans/Plans';

const Plans = StackNavigator({
    Plans: { screen: PlansScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Plans',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/plans.png')}
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

export default Plans;
