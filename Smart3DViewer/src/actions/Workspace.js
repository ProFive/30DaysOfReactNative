import firebase from 'firebase';

import {
    FETCH_WORKSPACE_SUCCESS,
    FETCH_WORKSPACE_ERROR
} from './types';

/**
* Get list workspace of current user
* @param {any} { me } 
* @returns list workspaceId of workspace
*/

export const fetchListWorkspace = ({ me }) => {
    console.log('fetchListWorkspace :', me.workspaceIds.lenght);
    return (dispatch) => {
        const workspaces = [];
        const workspacesKey = [];
        for (var key in me.workspaceIds) {
            // skip loop if the property is from prototype
            if (!me.workspaceIds.hasOwnProperty(key)) continue;
            workspacesKey.push(key);
        };
        getWorkspaces(workspaces, workspacesKey, function () {
            dispatch({
                type: FETCH_WORKSPACE_SUCCESS,
                workspaces
            });
        });

    };
};
function getWorkspaces(workspaces, workspacesKey, callback) {
    if (workspacesKey.length > 0) {
        const key = workspacesKey.pop();
        console.log('obj key:', key);
        getWorkspaceId(key, function (workspace) {
            workspaces.push(workspace);
            getWorkspaces(workspaces, workspacesKey, callback);
        });
    } else {
        callback();
    }
}
function getWorkspaceId(workspaceId, callback) {
    var path = '/workspace/' + workspaceId;
    firebase.database().ref(path)
        .on('value', snapshot => {
            const _workspace = JSON.stringify(snapshot.val());
            console.log(' _workspace:', _workspace);
            callback(JSON.parse(_workspace));
        });
}
