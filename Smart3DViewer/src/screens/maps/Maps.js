import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerButton } from '../../components';
import MapView from 'react-native-maps';

class Maps extends Component {
    static navigationOptions = {
        title: 'Maps',
        header: (navigation) => ({
            visible: true,
            left: <DrawerButton navigation={navigation} />
        }),
    }
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        };
    }
    onRegionChange(region) {
        this.setState({ region });
    }
    render() {
        return (
            <MapView
                region={this.state.region}
                onRegionChange={this.onRegionChange}
            />
        );
    }
}

export default Maps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});