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

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            animating: false
        };
    };
    handleLogin = () => {
        if (!this.state.logged) {
            LoginManager.logInWithPublishPermissions(['publish_actions']).then((result) => {
                if (result.isCancelled) {
                    alert('Cancel login');
                }
                // } else if (result.declinedPermissions) {
                //     alert('declinedPermissions');
                // } else {
                this.setState({logged: true});
                AccessToken.getCurrentAccessToken().then((data) => {
                    alert(data.accessToken.toString())
                }).catch(error => alert(error));
            }).catch(error => console.log(error));
        } else {
            this.setState({logged: false});
            LoginManager.logOut();
        }
    }

    onLogin = async() => {
        try {
            this.setState({animating: true});
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credential);
            firebase.database().ref(`/users/${user.uid}/profile`).set({name: user.displayName, email: user.email, avatar: user.photoURL});
            this.setState({animating: false});
        } catch (error) {
            this.setState({animating: false});
            console.log(error.message);
            // do something here
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <ActivityIndicator animating={this.state.animating} color="#ddd" size="large"/>
                <LoginButton publishPermissions={["publish_actions"]} onLoginFinished={(error, result) => {
                    if (error) {
                        alert("login has error: " + result.error);
                    } else if (result.isCancelled) {
                        alert("login is cancelled.");
                    } else {
                        AccessToken.getCurrentAccessToken().then((data) => {
                            alert(data.accessToken.toString())
                        })
                    }
                }} onLogoutFinished={() => alert("logout.")}/>
                <TouchableOpacity onPress={this.onLogin} style={{
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: 'green',
                    borderRadius: 5
                }}>
                    <Text style={{
                        color: '#fff'
                    }}>
                        {this.state.logged
                            ? 'Đăng xuất'
                            : 'Đăng nhập'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

render() {
    return (
        <View style={styles.container}>
            <LoginButton/>
            <TouchableHighlight style={styles.share} onPress={this.shareLinkWithShareDialog.bind(this)}>
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
