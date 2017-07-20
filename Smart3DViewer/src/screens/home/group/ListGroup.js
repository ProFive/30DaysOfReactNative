import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ListGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>List Group</Text>
            </View>
        );
    }
}

export default ListGroup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});