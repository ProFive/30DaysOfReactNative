import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { DrawerButton } from '../../components';
var { height, width } = Dimensions.get('window');
import MapView from 'react-native-maps';
//import RNGooglePlaces from 'react-native-google-places';
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
            mapRegion: null,
            locationLat: null,
            locationLng: null,
        }
    }
    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            this.onRegionChange(region, region.latitude, region.longitude);
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange(region, lastLat, lastLong) {
        this.setState({
            mapRegion: region,
            // If there are no new values set the current ones
            locationLat: locationLat || this.state.lastLat,
            locationLng: locationLng || this.state.lastLong
        });
    }
    render() {
        return (
            <View style={styles.container}>
                 <MapView
                    style={styles.map}
                    region={this.state.mapRegion}
                    showsUserLocation={true}
                    followUserLocation={true}
                    onRegionChange={this.onRegionChange.bind(this)}>
                    <MapView.Marker
                        coordinate={{
                            latitude: (this.state.locationLat + 0.00050) || -36.82339,
                            longitude: (this.state.locationLng + 0.00050) || -73.03569,
                        }}>
                        <View>
                            <Text style={{ color: '#000' }}>
                                {this.state.locationLng} / {this.state.locationLat}
                            </Text>
                        </View>
                    </MapView.Marker>
                </MapView> 
            </View>
        );
    }
}

export default Maps;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    map: {
        width: width,
        height: height
    },
    pin: {
        backgroundColor: '#ffa',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        borderRadius: 10
    },
    pinImage: {
        width: 25,
        height: 25
    },
    pinText: {
        color: 'red'
    },
    callout: {
        flex: 1,
        paddingRight: 10,
        paddingBottom: 10,
        marginRight: 10,
        marginBottom: 10
    },
    calloutPhoto: {
        flex: 1,
        width: 166,
        height: 83
    },
    calloutTitle: {
        fontSize: 16
    },
    regionInformation: {
        width: width,
        height: 150,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
