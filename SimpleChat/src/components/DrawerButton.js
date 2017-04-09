/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */


import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const DrawerButton = (navigation) => {
    return (
        < TouchableOpacity onPress={() => console.log('onPress')}>
            <Image source={require('../images/icons/menu.png')} style={{ width: 32, height: 32 }} />
        </TouchableOpacity >
    );
}
export { DrawerButton };
