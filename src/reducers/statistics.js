/**
 * Created by zhaoyu on 17-5-25.
 */

import {STATISTICS_ACTIONS} from '../actions/statistics';

const statState = {
    isQuerying: false,
    isQueried: false,
    statData: {}
};

export default function statisticReducer(state = statState, action) {
    console.log("statisticReducer " + action.type);
    switch (action.type) {
        case STATISTICS_ACTIONS.STATISTICS_REQUEST:
            return Object.assign({}, state, {
                isQuerying: true
            });

        case STATISTICS_ACTIONS.STATISTICS_SUCCESS:
            return Object.assign({}, state, {
                isQuerying: false,
                isQueried: true,
                statData: action.statData
            });

        case STATISTICS_ACTIONS.STATISTICS_FAILURE:
            return Object.assign({}, statState, {statData: {}, isQueried: false});

        default:
            return state;
    }
}