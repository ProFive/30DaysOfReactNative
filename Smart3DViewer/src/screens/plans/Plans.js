import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerButton } from '../../components';

class Plans extends Component {
    static navigationOptions = {
        title: 'Plans',
        header: (navigation) => ({
            visible: true,
            left: <DrawerButton navigation={navigation} />
        }),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Plans</Text>
            </View>
        );
    }
}

export default Plans;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});