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
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";
import firebase from "firebase";
import { loginSuccess } from "../actions/Auth";

// Initialize Firebase
const firebaseConfig = {
  "apiKey": "AIzaSyAjFMN_e_RcCPXfVuD6MTdQuBiqkHZUdiE",
  "authDomain": "smart3dviewer-33615.firebaseio.com",
  "databaseURL": "https://smart3dviewer-33615.firebaseio.com",
  "storageBucket": "smart3dviewer-33615.firebaseio.com/",
  "messagingSenderId": "912632814531"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      error: null
    };
  }

  componentDidMount() {
    this.setupGoogleSignin();
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: "912632814531-j06u11s0i36etefmsb6bbvt9tuitrepg.apps.googleusercontent.com",
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      if (user) {
        this.loginFirebase(user);
      }
    } catch (err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  /**
   * call login firebase with google account
   * @param {any} result 
   */
  async loginFirebase(result) {
    try {
      this.setState({
        animating: true,
        error: null
      });
      console.log("loginFirebase:", result);
      const token = result.accessToken.toString();
      const idToken = result.idToken.toString();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        token
      );
      const user = await firebase.auth().signInWithCredential(credential);
      // this.props.loginSuccess(user);
      console.log("user:", user);

      this.getUserInfo(user);
    } catch (error) {
      console.log("22 error.message:", error.message);
      this.setState({
        animating: false,
        error: error.message
      });
    }
  }

  getUserInfo(user) {
    //Check user exit firebase 
    firebase.database().ref(`/users/${user.uid}`).on('value', snapshot => {
      console.log("snapshot.val():", snapshot.val());
      if (snapshot.val()) {
        const account = JSON.stringify(snapshot.val());
        //console.log("account:", account);
        this.props.loginSuccess(JSON.parse(account));
      } else {
        this.initNewUser(user);
      }
    }, error => {
      console.log('check user exits firebase', error);
      this.initNewUser(user);

    });
  }

  /*
  * initialize data for new user login
  */
  initNewUser(user) {
    firebase.database().ref(`/users/${user.uid}`).set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      refreshToken: null,
      uid: user.uid
      // workspaceIds: {
      //   '-KjCe70-kW2zC-B5DCcD': true
      // }
    });
    this.props.loginSuccess(user);
  }

  onLogin = async () => {
    try {
      const result = await GoogleSignin.signIn();
      console.log("result:", result);

      if (result.isCancelled) {
        throw new Error("Please sign in before continue");
      }
      this.loginFirebase(result);
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
    logged: state.auth.loggedIn,
    user: state.auth.user
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
