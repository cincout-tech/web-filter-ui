/**
 * Created by zhaoyu on 17-3-17.
 */

import fetch from 'isomorphic-fetch';
import {isEmail, isPhoneNumber} from '../utils/Validate';
import {SubmissionError} from 'redux-form'

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

export function login(loginVo) {
    return function (dispatch) {
        dispatch(loginPost(loginVo));
        let accountVo = {};
        if (isEmail(loginVo.principal)) {
            accountVo.email = loginVo.principal;
        }
        else if (isPhoneNumber(loginVo.principal)) {
            accountVo.phoneNumber = loginVo.principal;
        }
        accountVo.password = loginVo.password;

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
        return fetch(`/api/login`, options)
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
                        if (json.status == "NOT_FOUND") {
                            return json.data;
                        } else if (json.status == "BAD_REQUEST") {
                            // ????
                            throw new SubmissionError({
                                password: 'error password',
                                _error: 'error password!'
                            })
                        }
                        //dispatch(loginFailure(json.msg.error));
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