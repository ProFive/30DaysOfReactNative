import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add Group</Text>
            </View>
        );
    }
}

export default AddGroup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});