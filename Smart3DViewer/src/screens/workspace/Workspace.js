import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    ListView,
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';
import { DrawerButton } from '../../components';
import { connect } from 'react-redux';
import { fetchWorkspaceId } from '../../actions';
//const RNFS = require('react-native-fs');


class Workspace extends Component {
    static navigationOptions = {
        title: 'Workspace',
        header: (navigation) => ({
            visible: true,
            left: <DrawerButton navigation={navigation} />
        }),
    }
   componentWillMount() {
        console.log('Workspace componentWillMount this.props:', this.props);
        this.props.fetchWorkspaceId(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps workspace:', nextProps.workspace);

        this.createDataSource(nextProps.workspace.models);
    }

    createDataSource(models) {
        console.log('createDataSource:', models);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(models);
    }

    onRowPressed = (model) => {
        console.log('onRowPressed model:', model);
    }

    renderRow = (item) => {
        return (
            <TouchableOpacity
                onPress={this.onRowPressed.bind(this, item)}
                style={styles.row}
            >
                <Text style={styles.name} > {item.type} {item.name}</Text>
            </TouchableOpacity>
        );
    }
  render() {
    if (this.props.loading) {
      return (
        <View style={styles.containerIndicator}>
          <ActivityIndicator size="large" color="grey" animating />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}
export default connect(state => ({
    workspace: state.workspace.workspace,
    loading: state.workspace.loading,
    workspaceId: state.auth.user.defaultWorkspace,
}), { fetchWorkspaceId })(Workspace);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    //alignItems: 'center'
  },
  containerIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  },
  name: {
    fontSize: 18,
    paddingLeft: 2,
    color: "#000"
  }
});
