/**
 * Created by zhaoyu on 17-1-19.
 */

import { combineReducers } from 'redux';

import sessionReducer from './accounts';
import searchReducer from './searchs';
import resourcePostReducer from './resources';

import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions';
const { SHOW_ALL } = VisibilityFilters;


function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

const baseReducer = combineReducers({
    session: sessionReducer,
    searchState: searchReducer,
    resourcePostState: resourcePostReducer
});

export default baseReducer;