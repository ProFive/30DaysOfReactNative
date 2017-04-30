import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerButton } from '../../components';

class Workspace extends Component {
    static navigationOptions = {
        title: 'Workspace',
        header: (navigation) => ({
            visible: true,
            left: <DrawerButton navigation={navigation} />
        }),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}

export default Workspace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});