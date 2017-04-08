/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {connect} from 'react-redux';

import {logout} from '../actions/Authenticate';
class Chat extends Component {
    static navigationOptions = {
        title: 'Chat',
        header: ({state}) => ({left: (
                <TouchableWithoutFeedback onPress ={() => console.log("aaaa")}>
                    <View style={{padding : 10}}>
                        <Text>Logout</Text>
                    </View>
                </TouchableWithoutFeedback>
            )})
    }
    state = {
        friends: [
            {
                name: 'Nguyen Van 1',
                age: 27,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 2',
                age: 43,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 3',
                age: 23,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 4',
                age: 27,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 5',
                age: 3,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 6',
                age: 343,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 7',
                age: 33,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 8',
                age: 37,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 9',
                age: 34,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }, {
                name: 'Nguyen Van 10',
                age: 267,
                avatar: 'https://facebook.github.io/react-native/img/opengraph.png'
            }
        ]
    }
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.state.friends);
    }
    renderRow = (item) => {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.itemAvatar} source={{
                    uri: item.avatar
                }}></Image>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        );
    }
    renderSeparator = (sectionId, rowId) => {
        return <View style={styles.itemSeparator} key={'${sectionId}-${rowId}'}/>;
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow} renderSeparator={this.renderSeparator}/>
            </View>
        );
    }
}
export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60
    },
    itemAvatar: {
        width: 60,
        height: 60
    },
    itemName: {
        paddingLeft: 15,
        fontSize: 16,
        color: '#000'
    },
    itemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#444'
    }

});
