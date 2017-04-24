import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { DrawerButton } from "../../components";
import MapView from "react-native-maps";

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
      region: {
        latitude: 10.8723975,
        longitude: 106.7909011,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />
      </View>
    );
  }
}

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
