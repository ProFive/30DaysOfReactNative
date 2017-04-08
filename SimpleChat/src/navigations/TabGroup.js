import { StackNavigator } from 'react-navigation';

import ListGroup from '../screens/home/group/ListGroup';
import AddGroup from '../screens/home/group/AddGroup';
import EditGroup from '../screens/home/group/EditGroup';
import ViewGroup from '../screens/home/group/ViewGroup';

const TabGroup = StackNavigator({
    List: { screen: ListGroup },
    Add: { screen: AddGroup },
    Edit: { screen: EditGroup },
    View: { screen: ViewGroup },

});

export default TabGroup;