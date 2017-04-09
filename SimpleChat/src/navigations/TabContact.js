import { StackNavigator } from 'react-navigation';
import ListContact from '../screens/home/contact/ListContact';
import AddContact from '../screens/home/contact/AddContact';
import EditContact from '../screens/home/contact/EditContact';
import ViewContact from '../screens/home/contact/ViewContact';

const TabContact = StackNavigator({
    List: {screen: ListContact },
    Add: { screen: AddContact },
    Edit: { screen: EditContact },
    View: { screen: ViewContact }
});

export default TabContact;