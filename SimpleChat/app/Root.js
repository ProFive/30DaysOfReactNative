/**
 * @Author: Nani
 * @Date:   04-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 04-Apr-2017
 */


import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import {
  LoginButton,
  AccessToken,
  LoginManager
} from 'react-native-fbsdk';


import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyACjNOhd3Uoc_d-EeD-Mvr9svF0-CwyjUM",
    authDomain: "simplechat-a5f19.firebaseio.com",
    databaseURL: "https://simplechat-a5f19.firebaseio.com",
    storageBucket: "simplechat-a5f19.firebaseio.com",
    messagingSenderId: "517820670017"
};

firebase.initializeApp(config);

class Root extends Component {
  constructor(props) {
   super(props);
   const shareLinkContent = {
     contentType: 'link',
     contentUrl: 'https://www.facebook.com/',
   };

   this.state = {
     shareLinkContent: shareLinkContent,
   };
 }

 shareLinkWithShareDialog() {
   var tmp = this;
   ShareDialog.canShow(this.state.shareLinkContent).then(
     function(canShow) {
       if (canShow) {
         return ShareDialog.show(tmp.state.shareLinkContent);
       }
     }
   ).then(
     function(result) {
       if (result.isCancelled) {
         alert('Share cancelled');
       } else {
         alert('Share success');
       }
     },
     function(error) {
       alert('Share fail with error: ' + error);
     }
   );
 }

 render() {
   return (
     <View style={styles.container}>
       <LoginButton/>
       <TouchableHighlight style={styles.share}
         onPress={this.shareLinkWithShareDialog.bind(this)}>
         <Text style={styles.shareText}>Share link with ShareDialog</Text>
       </TouchableHighlight>
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
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});
