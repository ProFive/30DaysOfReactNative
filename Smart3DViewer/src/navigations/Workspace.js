import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import WorkspaceScreen from '../screens/workspace/Workspace';

const Workspace = StackNavigator({
    Workspace: { screen: WorkspaceScreen }
}, {
        navigationOptions: {
            drawer: {
                label: 'Workspace',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/workspace.png')}
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

export default Workspace;
