import { TabNavigator } from 'react-navigation';

import TabContact from './TabContact';
import TabChat from './TabChat';
import TabGroup from './TabGroup';


const Home = TabNavigator({
    TabContact: { screen: TabContact },
    TabChat: { screen: TabChat },
    TabGroup: { screen: TabGroup },
});

export default Home;