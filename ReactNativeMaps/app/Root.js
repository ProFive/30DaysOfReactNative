/**
* @Author: Nani
* @Date:   14-Mar-2017
* @Email:  ngvannam5@gmail.com
* @Project: ReactNativeMaps
* @Last modified by:   Nani
* @Last modified time: 16-Mar-2017
*/

import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 10.870938,
                longitude: 106.7588,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: [
                {
                    latlng: {
                        latitude: 10.8494509,
                        longitude: 106.7563363
                    },
                    image: require('./images/home.png'),
                    photo: require('./images/home.png'),
                    title: "My location!",
                    description: "45/2/2 Ho Van Tu"
                }, {
                    latlng: {
                        latitude: 10.849957,
                        longitude: 106.7544703
                    },
                    image: require('./images/cassette.png'),
                    photo: require('./images/cassette.png'),
                    title: "Nhà Thờ Thủ Đức",
                    description: "41, Đường Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, Linh Tây, Thủ Đức, Hồ Chí Minh, Việt Nam"
                }, {
                    latlng: {
                        latitude: 10.849957,
                        longitude: 106.7564731
                    },
                    image: require('./images/report.png'),
                    photo: require('./images/report.png'),
                    title: "Trường CĐ Xây dựng số 2",
                    description: "190 Thu Duc District, Võ Văn Ngân, Bình Thọ, Thủ Đức, Hồ Chí Minh, Việt Nam"
                }
            ]
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    onRegionChange(region) {
        this.setState({region});
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView
                  showsMyLocationButton={true}
                  showsUserLocation={true}
                  style={styles.map}
                  region={this.state.region}
                  onRegionChange={this.onRegionChange}>
                    {this.state.markers.map((marker, i) => (
                      <MapView.Marker
                        key={i}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}>
                        <View style={styles.pin}>
                          <Image style={styles.pinImage} source={marker.image}/>
                            <Text style={styles.pinText}>
                              {marker.title}
                            </Text>
                        </View>
                        <MapView.Callout>
                          <View style={styles.callout}>
                            <Image style={styles.calloutPhoto} source={marker.photo}/>
                              <Text style={styles.calloutTitle}>
                                {marker.title}
                              </Text>
                              <Text>
                                {marker.description}
                              </Text>
                          </View>
                        </MapView.Callout>
                      </MapView.Marker>
                    ))}
                </MapView>
                <View style={styles.regionInformation}>
                    <Text>
                        Lat: {this.state.region.latitude}
                        Log: {this.state.region.longitude}{'\n'}
                        LatDelta: {this.state.region.latitudeDelta}
                        LogDelta: {this.state.region.longitudeDelta}
                    </Text>
                </View>
            </View>
        );
    }
}
export default Root;
const styles = StyleSheet.create({
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
    pin:{
      backgroundColor:'#ffa',
      justifyContent:'center',
      alignItems:'center',
      borderColor:'black',
      borderWidth:2,
      padding:5,
      borderRadius:10
    },
    pinImage:{
      width:25,
      height:25
    },
    pinText:{
      color:'red'
    },
    callout:{
      flex:1,
      paddingRight:10,
      paddingBottom:10,
      marginRight: 10,
      marginBottom:10
    },
    calloutPhoto:{
      flex:1,
      width:166,
      height: 83
    },
    calloutTitle:{
      fontSize:16
    },
    regionInformation: {
        width: width,
        height: 100,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
