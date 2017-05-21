/**
 * Created by zhaoyu on 17-5-15.
 */
import {SEARCH_ACTIONS} from '../actions/searchs';

const searchState = {
    isSearched: false,
    isSearching: false,
    queryData: {
        keywords: ""
    },
    queryResult: {}
};

export default function searchReducer(state = searchState, action) {
    switch (action.type) {
        case SEARCH_ACTIONS.SEARCH_REQUEST:
            return Object.assign({}, state, {
                isSearching:true,
                queryData: action.queryData
            });

        case SEARCH_ACTIONS.SEARCH_SUCCESS:
            return Object.assign({}, state, {
                isSearched:true,
                isSearching:false,
                queryResult:action.queryResult
            });

        case SEARCH_ACTIONS.SEARCH_FAILURE:
            return searchState;

        default:
            return searchState;

    }
}