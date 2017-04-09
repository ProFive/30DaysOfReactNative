import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

class Setting extends Component {
    static navigationOptions = {
        title: 'Setting',
        header: {
            visible: true
        }
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
