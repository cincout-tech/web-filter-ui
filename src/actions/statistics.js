/**
 * Created by zhaoyu on 17-5-25.
 */

import fetch from 'isomorphic-fetch';

export const STATISTICS_ACTIONS = {
    STATISTICS_REQUEST: "SEARCH_REQUEST",
    STATISTICS_SUCCESS: "SEARCH_SUCCESS",
    STATISTICS_FAILURE:"SEARCH_FAILURE"
};

export function statisticPost() {
    return {
        type: STATISTICS_ACTIONS.STATISTICS_REQUEST
    };
}

export function receiveStatisticPost(statData) {
    return {
        type: STATISTICS_ACTIONS.STATISTICS_SUCCESS,
        statData: statData
    };
}

export function statisticFailure(msg) {
    return {
        type: STATISTICS_ACTIONS.STATISTICS_FAILURE,
        errorMsg: msg
    };
}

export function statistic() {
    return dispatch => {
        dispatch(statisticPost());

        var options = {
            method: "GET",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch(`/api/statistic`, options).then(response => {
            if (response.status == 200) {
                response.json().then(statData =>{
                    console.log(statData);
                    dispatch(receiveStatisticPost(statData));
                });
            }
        });
    }
}