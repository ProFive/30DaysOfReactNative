import React from 'react';
import { Image } from 'react-native';
import { TabNavigator,TabView } from 'react-navigation';
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
            // activeBackgroundColor: 'yellow'
        },
        tabBarComponent: TabView.TabBarBottom,
        tabBarPosition: 'bottom',
        navigationOptions: {
            drawer: {
                label: 'Home',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('../images/icons/home.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            }
        }

    });

const styles = {
    icon: {
        width: 32,
        height: 32
    }
};
export default Home;