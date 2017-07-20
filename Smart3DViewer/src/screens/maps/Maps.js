import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { DrawerButton } from "../../components";
import { connect } from "react-redux";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

//import RNGooglePlaces from 'react-native-google-places';

class Maps extends Component {
  static navigationOptions = {
    title: "Maps",
    header: navigation => ({
      visible: true,
      left: <DrawerButton navigation={navigation} />
    })
  };
  constructor(props) {
    super(props);

    this.state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null
    };
  }
  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      position => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5
        };
        this.onRegionChange(region, region.latitude, region.longitude);
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
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
          onRegionChange={this.onRegionChange.bind(this)}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.lastLat + 0.0005 || -36.82339,
              longitude: this.state.lastLong + 0.0005 || -73.03569
            }}
          >
            <View>
              <Text style={{ color: "#000" }}>
                {this.state.lastLong} / {this.state.lastLat}
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
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
