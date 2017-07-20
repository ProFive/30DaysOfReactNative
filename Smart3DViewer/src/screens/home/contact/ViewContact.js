import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ViewContact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>View contact</Text>
            </View>
        );
    }
}

export default ViewContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});