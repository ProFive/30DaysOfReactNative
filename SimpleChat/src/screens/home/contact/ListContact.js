import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ListContact extends Component {
    static navigationOptions = {
        title: 'List Contact'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>List contact</Text>
            </View>
        );
    }
}

export default ListContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});