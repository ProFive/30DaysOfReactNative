import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { DrawerButton } from '../../components';

class Setting extends Component {
    static navigationOptions = {
        title: 'Setting',
        header: (navigation) => ({
            visible: true,
            left: <DrawerButton navigation={navigation} />
        }),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
        );
    }
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
