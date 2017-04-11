import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddContact extends Component {
    static navigationOptions = {
        tabBar: {
            visible: false
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Add contact</Text>
            </View>
        );
    }
}

export default AddContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});