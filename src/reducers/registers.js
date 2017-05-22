/**
 * Created by zhaoyu on 17-5-22.
 */

import { REGISTER_ACTIONS } from '../actions/registers';

const registerState = {
    isRegistering: false,
    isRegistered: false,
    responseData: {}
}

export default function registerReducer(state = registerState, action) {
    console.log("registerReducer " + action.type);
    switch (action.type) {
        case REGISTER_ACTIONS.REGISTER_REQUEST:
            return Object.assign({}, state, {
                isRegistering: true
            });

        case REGISTER_ACTIONS.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isRegistering: false,
                isRegistered: true,
                responseData: action.data
            });

        case REGISTER_ACTIONS.REGISTER_FAILURE:
            return Object.assign({}, state, {
                isRegistering: false,
                isRegistered: false,
                responseData: action.data
            });

        default:
            return state;
    }
}