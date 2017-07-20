import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ViewChat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>View Chat</Text>
            </View>
        );
    }
}

export default ViewChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});