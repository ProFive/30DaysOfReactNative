import { StackNavigator } from 'react-navigation';

import ListChat from '../screens/home/chat/ListChat';
import AddChat from '../screens/home/chat/AddChat';
import EditChat from '../screens/home/chat/EditChat';
import ViewChat from '../screens/home/chat/ViewChat';

const TabChat = StackNavigator({
    List: { screen: ListChat },
    Add: { screen: AddChat },
    Edit: { screen: EditChat },
    View: { screen: ViewChat },

});

export default TabChat;