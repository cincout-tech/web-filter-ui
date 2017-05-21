/**
 * Created by zhaoyu on 17-5-15.
 */
import {SEARCH_ACTIONS} from '../actions/searchs';
import {RESOURCE_LIKE_ACTIONS} from '../actions/resources';
import {RESOURCE_VIEW_ACTIONS} from '../actions/resources';

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

        case RESOURCE_LIKE_ACTIONS.RESOURCE_LIKE_SUCCESS: {
            let queryResult = Object.assign({}, state.queryResult);
            var resourceDto = action.resourceDto;
            var destIndex = 0;
            for (let index in queryResult.content) {
                if (queryResult.content[index].id == resourceDto.id) {
                    destIndex = index;
                    break;
                }
            }
            queryResult.content[destIndex] = resourceDto;
            return Object.assign({}, state, {
                queryRequest: queryResult
            });
        }

        case RESOURCE_LIKE_ACTIONS.RESOURCE_LIKE_REQUEST:
            return state;

        case RESOURCE_VIEW_ACTIONS.RESOURCE_VIEW_SUCCESS: {
            let queryResult = Object.assign({}, state.queryResult);
            var resourceDto = action.resourceDto;
            var destIndex = 0;
            for (let index in queryResult.content) {
                if (queryResult.content[index].id == resourceDto.id) {
                    destIndex = index;
                    break;
                }
            }
            queryResult.content[destIndex] = resourceDto;
            return Object.assign({}, state, {
                queryRequest: queryResult
            });
        }

        case RESOURCE_VIEW_ACTIONS.RESOURCE_VIEW_REQUEST:
            return state;

        default:
            return searchState;

    }
}