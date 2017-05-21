/**
 * Created by zhaoyu on 17-3-30.
 */

import {QUERY_PRICE_LIST_ACTIONS} from '../actions/prices';

const priceListState = {
    isFetching: false,
    isFetched: false,
    didInvalidate: false,
    priceList: []
};

export default function priceReducer(state = priceListState, action) {
    console.log("priceListState " + action.type);
    switch (action.type) {
        case QUERY_PRICE_LIST_ACTIONS.QUERY_PRICE_LIST_REQUEST:
            return {...priceListState, isFetching : true};

        case QUERY_PRICE_LIST_ACTIONS.QUERY_PRICE_LIST_SUCCESS:
            return {
                ...priceListState,
                isFetching:false,
                isFetched: true,
                didInvalidate: false,
                priceList: action.priceList
            };
        default:
            return state;
    }
}