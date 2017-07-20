import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class EditGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Edit Group</Text>
            </View>
        );
    }
}

export default EditGroup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});