/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */
 import React, {Component} from 'react';
 import {StyleSheet, View, Text} from 'react-native';
 import {connect} from 'react-redux';

 import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

 import firebase from 'firebase';
 const config = {
     apiKey: "AIzaSyACjNOhd3Uoc_d-EeD-Mvr9svF0-CwyjUM",
     authDomain: "simplechat-a5f19.firebaseio.com",
     databaseURL: "https://simplechat-a5f19.firebaseio.com",
     storageBucket: "simplechat-a5f19.firebaseio.com",
     messagingSenderId: "517820670017"
 };

 firebase.initializeApp(config);


 class Login extends Component {
     componentDidMount() {
         console.log('componentDidMount:', this.props);
     }
     render() {
         return (
             <View style={styles.container}>
                 <Text style={styles.welcome}>Login Screen</Text>
             </View>
         );
     }
 }
 const mapStateToProps = (state) => {
     console.log('mapStateToProps:', state);
     return {logged: state.authentication.loggedIn, user: state.authentication.user};
 };

 export default connect(mapStateToProps)(Login);

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
     }
 });
