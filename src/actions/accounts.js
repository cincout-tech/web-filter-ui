/**
 * Created by zhaoyu on 17-3-17.
 */

import fetch from 'isomorphic-fetch';

const LOGIN_ACTIONS = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    LOGIN_SUCCESS: "LOGIN_SUCCESS"
};

export function isLogging() {
    return {
        type: LOGIN_ACTIONS.LOGIN_REQUEST
    };
}

export const LOGIN_POST = "LOGIN_POST";
export function loginPost(accountVo) {
    return {
        type: LOGIN_POST,
        accountVo
    };
}

export const RECEIVE_LOGIN_POST = "RECEIVE_LOGIN_POST";
export function receiveLoginPost(json) {
    return {
        type: RECEIVE_LOGIN_POST,
        account: json
    }
}

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export function loginFailure(msg) {
    return {
        type: LOGIN_FAILURE,
        errorMsg: msg
    };
}

export function login(accountVo) {
    return function (dispatch) {
        dispatch(loginPost(accountVo));

        var options = {
            method: "POST",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountVo)
        };
        fetch(`/api/login`, options)
            .then(function (response) {
                if (response.status != 200) {
                    console.log("error " + response.status);
                }

                response.json().then(function (json) {
                    console.log("post return:");
                    console.log(json);
                    if (json.status == "OK") {
                        dispatch(receiveLoginPost(json.data));
                    } else {
                        dispatch(loginFailure(json.msg.error));
                    }

                });
            })
            .catch(function (err) {
                console.log("fetch error: " + err);
            });
    };

}

export const LOGOUT_ACTION = "LOGOUT_ACTION";
export function logout() {
    return {
        type: LOGOUT_ACTION
    };
}