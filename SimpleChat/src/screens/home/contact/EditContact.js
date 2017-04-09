import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class EditContact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Edit contact</Text>
            </View>
        );
    }
}

export default EditContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});