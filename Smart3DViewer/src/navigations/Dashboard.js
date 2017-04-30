import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DashboardScreen from '../screens/dashboard/Dashboard';

const Dashboard = StackNavigator({
    Dashboard: { screen: DashboardScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Dashboard',
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

export default Dashboard;
