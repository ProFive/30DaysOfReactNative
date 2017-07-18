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

// export const fetchListWorkspace = ({ me }) => {
//     console.log('fetchListWorkspace defaultWorkspace:', me.defaultWorkspace);

//     return (dispatch) => {
//         const workspaces = [];
//         const workspacesKey = [];
//         // for (var key in me.workspaceIds) {
//         //     // skip loop if the property is from prototype
//         //     if (!me.workspaceIds.hasOwnProperty(key))
//         //         continue;
//         //     workspacesKey.push(key);
//         // };
//         workspacesKey.push(me.defaultWorkspace);

//         getWorkspaces(workspaces, workspacesKey, function () {
//             dispatch({
//                 type: FETCH_WORKSPACE_SUCCESS,
//                 workspaces
//             });
//         });

//     };
// };

export const fetchWorkspaceId = ({ workspaceId }) => {
    console.log('fetchWorkspaceId:', workspaceId);
    const db = firebase.database();
    return (dispatch) => {
        var path = '/workspace/' + workspaceId;
        console.log('getWorkspaceId path:' + path);
        db.ref(path)
            .on('value', snapshot => {
                //const _workspace = JSON.stringify(snapshot.val());
                const _workspace = snapshot.val();
                if (_workspace != null) {
                    console.log(' _workspace:', _workspace);
                    dispatch({
                        type: FETCH_WORKSPACE_SUCCESS,
                        workspace: _workspace
                    });
                } else {
                    dispatch({
                        type: FETCH_WORKSPACE_ERROR
                    });
                }
            });

    };
};

function getWorkspaces(workspaces, workspacesKey, callback) {
    console.log('getWorkspaces:');
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
    console.log('getWorkspaceId path:' + path);
    firebase.database().ref(path)
        .on('value', snapshot => {
            const _workspace = JSON.stringify(snapshot.val());
            console.log(' _workspace:', _workspace);
            callback(JSON.parse(_workspace));
        });
}
