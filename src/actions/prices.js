/**
 * Created by zhaoyu on 17-3-30.
 */

import fetch from 'isomorphic-fetch';

export const QUERY_PRICE_LIST_ACTIONS = {
    QUERY_PRICE_LIST_REQUEST: "QUERY_PRICE_LIST_REQUEST",
    QUERY_PRICE_LIST_FAILURE: "QUERY_PRICE_LIST_FAILURE",
    QUERY_PRICE_LIST_SUCCESS: "QUERY_PRICE_LIST_SUCCESS"
};

export function isQueryingPriceList() {
    return {
        type: QUERY_PRICE_LIST_ACTIONS.QUERY_PRICE_LIST_REQUEST
    };
}

export function receivedPriceList(json) {
    return {
        type: QUERY_PRICE_LIST_ACTIONS.QUERY_PRICE_LIST_SUCCESS,
        priceList: json
    };
}

export function queryPriceList() {
    return function (dispatch) {
        dispatch(isQueryingPriceList());
        fetch(`/data/priceList.json`).then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    console.log(data);
                    dispatch(receivedPriceList(data));
                });
            }
        }).catch(err => {
            console.log("fetch error: " + err)
        });
    }
}

export const SERVICE_PURCHASE_ACTIONS = {
    ORDER_IS_SAVING: "ORDER_IS_SAVING",
    ORDER_SAVING_SUCCESS: "ORDER_SAVING_SUCCESS",
    ORDER_SAVING_FAILURE: "ORDER_SAVING_FAILURE"
};

export function isSavingOrder(orderDetail) {
    return {
        type: SERVICE_PURCHASE_ACTIONS.ORDER_IS_SAVING
    };
}

export function orderSavingSuccess(json) {
    return {
        type: SERVICE_PURCHASE_ACTIONS.ORDER_SAVING_SUCCESS,
        orderDetail: json
    }
}

export function purchaseService(orderDetail) {
    return dispatch => {
        dispatch(isSavingOrder(orderDetail));

        var options = {
            method: "POST",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        };

        return fetch(`api/order`, options)
            .then(response => {
                if (response.status != 200) {
                    console.log("error " + response.status);
                }
                response.json().then(function (data) {
                    dispatch(orderSavingSuccess(data));
                });
            }).catch(err => {
                console.log("fetch error: " + err);
            });
    };
}