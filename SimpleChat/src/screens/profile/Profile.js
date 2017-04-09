import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
        header: {
            visible: true
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});