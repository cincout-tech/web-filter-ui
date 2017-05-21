/**
 * Created by zhaoyu on 17-5-16.
 */
import {RESOURCE_POST_ACTIONS} from '../actions/resources';

const resourcePostState = {
    isPosted: false,
    isPosting: false,
    resourceDto: {}
};

export default function resourcePostReducer(state = resourcePostState, action) {
    switch (action.type) {
        case RESOURCE_POST_ACTIONS.RESOURCE_POST_REQUEST:
            return Object.assign({}, state, {
                isPosting:true
            });

        case RESOURCE_POST_ACTIONS.RESOURCE_POST_SUCCESS:
            return Object.assign({}, state, {
                isPosted:true,
                isPosting:false,
                resourceDto :action.resourceDto
            });

        case RESOURCE_POST_ACTIONS.RESOURCE_POST_FAILURE:
            return resourcePostState;

        default:
            return resourcePostState;

    }
}