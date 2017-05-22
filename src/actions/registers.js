/**
 * Created by zhaoyu on 17-5-22.
 */
import fetch from 'isomorphic-fetch';

export const REGISTER_ACTIONS = {
    REGISTER_REQUEST: "REGISTER_REQUEST",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILURE: "REGISTER_FAILURE"
};

export function registerPosting() {
    return {
        type: REGISTER_ACTIONS.REGISTER_REQUEST
    };
}

export function registerSuccess(data) {
    return {
        type: REGISTER_ACTIONS.REGISTER_SUCCESS,
        data: data
    }
}

export function registerFailure(msg) {
    return {
        type: REGISTER_ACTIONS.REGISTER_FAILURE,
        errorMgs: msg
    };
}

export function register(accountVo) {
    return function (dispatch) {
        dispatch(registerPosting());

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

        fetch(`/api/register`, options).then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    console.log(data);
                    dispatch(registerSuccess(data));
                });
            }
        });
    };
}