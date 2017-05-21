/**
 * Created by zhaoyu on 17-5-16.
 */
import fetch from 'isomorphic-fetch';

export const RESOURCE_POST_ACTIONS = {
    RESOURCE_POST_REQUEST: "RESOURCE_POST_REQUEST",
    RESOURCE_POST_SUCCESS: "RESOURCE_POST_SUCCESS",
    RESOURCE_POST_FAILURE:"RESOURCE_POST_FAILURE"
};

export function resourcePosting() {
    return {
        type: RESOURCE_POST_ACTIONS.RESOURCE_POST_REQUEST
    };
}

export function receiveSearchPost(resourceDto) {
    return {
        type: RESOURCE_POST_ACTIONS.RESOURCE_POST_SUCCESS,
        resourceDto
    };
}

export function resourcePostFailure(msg) {
    return {
        type: RESOURCE_POST_ACTIONS.RESOURCE_POST_FAILURE,
        errorMsg: msg
    };
}

export function postResource(resourceVo) {
    return function (dispatch) {
        dispatch(resourcePosting());

        var options = {
            method: "POST",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resourceVo)
        };
        fetch(`/api/resources`, options).then(response => {
            if (response.status == 200) {
                response.json().then(queryResult =>{
                    console.log(queryResult);
                    dispatch(receiveSearchPost(queryResult));
                });
            }
        });
    };
}