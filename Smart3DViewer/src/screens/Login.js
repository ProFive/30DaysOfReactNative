/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
//import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

import firebase from "firebase";

import { loginSuccess } from "../actions/Authenticate";

const config = {
  apiKey: "AIzaSyDe98qXvA1giGE-TT65oslA-twAq_xcv_U",
  authDomain: "smartfield-survey.firebaseio.com",
  databaseURL: "https://smartfield-survey.firebaseio.com/",
  storageBucket: "smartfield-survey.firebaseio.com",
  messagingSenderId: "686477335673"
};
firebase.initializeApp(config);

class Login extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };
  state = {
    animating: false,
    error: null
  };

  componentDidMount() {
    this.setupGoogleSignin();
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      GoogleSignin.configure({
        webClientId: "686477335673-shecut178qffaqkbas7ho8atbpi06912.apps.googleusercontent.com",
        offlineAccess: false
      });
      /*
      const user = await GoogleSignin.currentUserAsync();
      if (user) {
        //this.setState({ user });
        console.log("111 user:", user);
        this.props.loginSuccess(user);
      }*/
    } catch (err) {
      console.log("Play services error", err.code, err.message);
    }
  }
  onLogin = async () => {
    try {
      this.setState({
        animating: true,
        error: null
      });

      const result = await GoogleSignin.signIn();
      console.log("result:", result);

      if (result.isCancelled) {
        throw new Error("Please sign in before continue");
      }

      console.log("111111111111111111111111111111111:");
      console.log("idToken:", result.idToken);
      console.log("accessToken:", result.accessToken);
      const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
      console.log("credential:", credential);
      const user = await firebase.auth().signInWithCredential(credential);
      if (user) {
        console.log("user:", user);
        firebase.database().ref(`/users/${user.uid}`).set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });

        this.setState({
          animating: false,
          error: null
        });
        this.props.loginSuccess(user);
      } else {
        console.log("11 error.message:", error.message);
        this.setState({
          animating: false,
          error: error.message
        });
      }
    } catch (error) {
      console.log("22 error.message:", error.message);
      this.setState({
        animating: false,
        error: error.message
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login Screen</Text>
        <ActivityIndicator
          animating={this.state.animating}
          color="#444"
          size="large"
        />
        {this.state.error
          ? <Text style={styles.error}>{this.state.error}</Text>
          : null}
        <TouchableOpacity
          onPress={this.onLogin}
          style={{
            marginTop: 10,
            padding: 10,
            backgroundColor: "#db3236",
            borderRadius: 5
          }}
        >
          <Text style={{ color: "#fff" }}>
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(
  state => ({
    logged: state.authentication.loggedIn,
    user: state.authentication.user
  }),
  { loginSuccess }
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  error: {
    color: "red"
  }
});
