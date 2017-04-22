import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";
import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjFMN_e_RcCPXfVuD6MTdQuBiqkHZUdiE",
  authDomain: "smart3dviewer-33615.firebaseio.com",
  databaseURL: "https://smart3dviewer-33615.firebaseio.com",
  storageBucket: "smart3dviewer-33615.firebaseio.com/",
  messagingSenderId: "912632814531"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  render() {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton
            style={{ width: 120, height: 44 }}
            color={GoogleSigninButton.Color.Light}
            size={GoogleSigninButton.Size.Icon}
            onPress={() => {
              this._signIn();
            }}
          />
        </View>
      );
    }

    if (this.state.user) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
            Welcome {this.state.user.name}
          </Text>
          <Text>Your email is: {this.state.user.email}</Text>

          <TouchableOpacity
            onPress={() => {
              this._signOut();
            }}
          >
            <View style={{ marginTop: 50 }}>
              <Text>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: "912632814531-j06u11s0i36etefmsb6bbvt9tuitrepg.apps.googleusercontent.com",
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({ user });

      //Call login firebase
      this._loginFirebase();
    } catch (err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
      .then(user => {
        console.log(user);

        this.setState({ user: user });
        //Call login firebase
        this._loginFirebase();
      })
      .catch(err => {
        console.log("WRONG SIGNIN", err);
      })
      .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess()
      .then(() => GoogleSignin.signOut())
      .then(() => {
        this.setState({ user: null });
      })
      .done();
  }
  _loginFirebase = async () => {
    try {
      console.log("_loginFirebase:", this.state.user);
      if (this.state.user) {
        const token = this.state.user.accessToken.toString();
        const idToken = this.state.user.idToken.toString();
        const credential = firebase.auth.GoogleAuthProvider.credential(
          idToken,
          token
        );
        const user = await firebase.auth().signInWithCredential(credential);
        console.log("user:", user);
        firebase.database().ref(`/users/${user.uid}`).set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
      }
    } catch (error) {
      console.log("_loginFirebase error.message:", error.message);
    }
  };
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
