/**
 * @Author: Nani
 * @Date:   08-Apr-2017
 * @Email:  ngvannam5@gmail.com
 * @Project: 30DaysOfReactNative
 * @Last modified by:   Nani
 * @Last modified time: 08-Apr-2017
 */
import React, {Component} from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import RootNavigation from './navigations/RootNavigation';

class AppNavigator extends Component {
    render() {
        return (<RootNavigation
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav})}
          />
        );
    }
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps:', state);
    return {nav: state.nav};
};

export default connect(mapStateToProps)(AppNavigator);
