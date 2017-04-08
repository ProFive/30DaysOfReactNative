import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ViewGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>View Group</Text>
            </View>
        );
    }
}

export default ViewGroup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});