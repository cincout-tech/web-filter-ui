/**
 * Created by zhaoyu on 17-3-17.
 */

import { LOGIN_POST, RECEIVE_LOGIN_POST, LOGOUT_ACTION } from '../actions/accounts';

const sessionState = {
    account: {},
    isLogin: false,
    isLogging: false
}

export default function sessionReducer(state = sessionState, action) {
    console.log("sessionReducer " + action.type);
    switch (action.type) {
        case LOGIN_POST:
            return Object.assign({}, state, {
                isLogging: true
            });

        case RECEIVE_LOGIN_POST:
            return Object.assign({}, state, {
                isLogin: true,
                isLogging: false,
                account: action.account
            });

        case LOGOUT_ACTION:
            return Object.assign({}, sessionState, {account: {}, isLogin: false});

        default:
            return state;
    }
}