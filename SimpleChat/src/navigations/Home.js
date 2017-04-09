import React from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import TabContact from './TabContact';
import TabChat from './TabChat';
import TabGroup from './TabGroup';


const Home = TabNavigator({
    TabContact: {
        screen: TabContact,
        navigationOptions: {
            tabBar: {
                label: 'Contact',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/contact.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            }
        }
    },
    TabChat: {
        screen: TabChat,
        navigationOptions: {
            tabBar: {
                label: 'Chat',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/chat.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            }
        }
    },
    TabGroup: {
        screen: TabGroup,
        navigationOptions: {
            tabBar: {
                label: 'Group',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/group.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                ),
            }
        }
    },
}, {
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'grey',
            activeBackgroundColor: 'yellow'
        },
        tabBarPosition: 'bottom',

    });

const styles = {
    icon: {
        width: 64,
        height: 64
    }
};
export default Home;