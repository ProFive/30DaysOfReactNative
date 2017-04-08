import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ListChat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>List Chat</Text>
            </View>
        );
    }
}

export default ListChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});