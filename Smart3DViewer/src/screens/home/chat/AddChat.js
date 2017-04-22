import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddChat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add Chat</Text>
            </View>
        );
    }
}

export default AddChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});