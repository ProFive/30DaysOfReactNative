import {
    FETCH_WORKSPACE_SUCCESS,
    FETCH_WORKSPACE_ERROR
} from '../actions/types';

const INITIAL = {
    loading: true,
    workspace: null
};

export default (state = INITIAL, action) => {
    switch (action.type) {
        case FETCH_WORKSPACE_SUCCESS:
            return { ...state, loading: false, workspace: action.workspace };
        case FETCH_WORKSPACE_ERROR:
            return { ...INITIAL, loading: false };
        default:
            return state;
    }
}