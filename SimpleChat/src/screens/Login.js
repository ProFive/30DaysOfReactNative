/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'firebase';

import { loginSuccess } from '../actions/Authenticate';

const config = {
    apiKey: "AIzaSyACjNOhd3Uoc_d-EeD-Mvr9svF0-CwyjUM",
    authDomain: "simplechat-a5f19.firebaseio.com",
    databaseURL: "https://simplechat-a5f19.firebaseio.com",
    storageBucket: "simplechat-a5f19.firebaseio.com",
    messagingSenderId: "517820670017"
};

firebase.initializeApp(config);


class Login extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    }
    state = {
        animating: false,
        error: null
    }
    onLogin = async () => {
        try {
            this.setState({
                animating: true,
                error: null
            });
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                throw new Error('Please sign in before continue');
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credential);
            console.log('user:', user);
            this.setState({
                animating: false,
                error: null
            });
            this.props.loginSuccess(user);
        } catch (error) {
            this.setState({
                animating: false,
                error: error.message
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login Screen</Text>
                <ActivityIndicator
                    animating={this.state.animating}
                    color="#444"
                    size="large"
                />
                {
                    this.state.error ? (
                        <Text style={styles.error}>{this.state.error}</Text>
                    ) : null
                }
                <TouchableOpacity
                    onPress={this.onLogin}
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: '#3b5998',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: '#fff' }}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps:', state);
    return { logged: state.authentication.loggedIn, user: state.authentication.user };
};

export default connect(mapStateToProps, {loginSuccess})(Login);

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
    error: {
        color: 'red'
    }
});
