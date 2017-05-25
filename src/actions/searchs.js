/**
 * Created by zhaoyu on 17-5-15.
 */

import fetch from 'isomorphic-fetch';
import {queryParams} from './utils';

export const SEARCH_ACTIONS = {
    SEARCH_REQUEST: "SEARCH_REQUEST",
    SEARCH_SUCCESS: "SEARCH_SUCCESS",
    SEARCH_FAILURE:"SEARCH_FAILURE"
};




export function searchPost(queryData) {
    return {
        type: SEARCH_ACTIONS.SEARCH_REQUEST,
        queryData
    };
}

export function receiveSearchPost(queryResult) {
    return {
        type: SEARCH_ACTIONS.SEARCH_SUCCESS,
        queryResult
    };
}

export function searchFailure(msg) {
    return {
        type: SEARCH_ACTIONS.SEARCH_FAILURE,
        errorMsg: msg
    };
}

export function search(queryData) {
    return function (dispatch) {
        dispatch(searchPost(queryData));

        var options = {
            method: "GET",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        let qs = queryParams(queryData);
        fetch(`/api/resources?` + qs, options).then(response => {
            if (response.status == 200) {
                response.json().then(queryResult =>{
                    console.log(queryResult);
                    dispatch(receiveSearchPost(queryResult));
                });
            }
        });
    };
}

