/**
 * Created by zhaoyu on 17-5-16.
 */
import fetch from 'isomorphic-fetch';

export const RESOURCE_POST_ACTIONS = {
    RESOURCE_POST_REQUEST: "RESOURCE_POST_REQUEST",
    RESOURCE_POST_SUCCESS: "RESOURCE_POST_SUCCESS",
    RESOURCE_POST_FAILURE:"RESOURCE_POST_FAILURE"
};


export const RESOURCE_LIKE_ACTIONS = {
    RESOURCE_LIKE_REQUEST: "RESOURCE_LIKE_REQUEST",
    RESOURCE_LIKE_SUCCESS: "RESOURCE_LIKE_SUCCESS",
    RESOURCE_LIKE_FAILURE: "RESOURCE_LIKE_FAILURE"
};

export function resourceLikePosting(resourceId) {
    return {
        type: RESOURCE_LIKE_ACTIONS.RESOURCE_LIKE_REQUEST,
        resourceId: resourceId
    };
}

export function resourceLikeSuccess(resourceDto) {
    return {
        type: RESOURCE_LIKE_ACTIONS.RESOURCE_LIKE_SUCCESS,
        resourceDto: resourceDto
    }
}

export function resourceLikeFailure(msg) {
    return {
        type: RESOURCE_LIKE_ACTIONS.RESOURCE_LIKE_FAILURE,
        errorMgs: msg
    };
}

export function likeAction(likeVo) {
    return function (dispatch) {
        dispatch(resourceLikePosting(likeVo.resourceId));

        var options = {
            method: "POST",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        let url = "/api/account/" + likeVo.accountId + "/resources/" + likeVo.resourceId + "/like";
        fetch(url, options).then(response => {
            if (response.status == 200) {
                response.json().then(resourceDto =>{
                    console.log(resourceDto);
                    dispatch(resourceLikeSuccess(resourceDto));
                });
            }
        });
    };
}


export const RESOURCE_VIEW_ACTIONS = {
    RESOURCE_VIEW_REQUEST: "RESOURCE_VIEW_REQUEST",
    RESOURCE_VIEW_SUCCESS: "RESOURCE_VIEW_SUCCESS",
    RESOURCE_VIEW_FAILURE: "RESOURCE_VIEW_FAILURE"
};

export function resourceViewPosting(resourceId) {
    return {
        type: RESOURCE_VIEW_ACTIONS.RESOURCE_VIEW_REQUEST,
        resourceId: resourceId
    };
}

export function resourceViewSuccess(resourceDto) {
    return {
        type: RESOURCE_VIEW_ACTIONS.RESOURCE_VIEW_SUCCESS,
        resourceDto: resourceDto
    }
}

export function resourceViewFailure(msg) {
    return {
        type: RESOURCE_VIEW_ACTIONS.RESOURCE_VIEW_FAILURE,
        errorMgs: msg
    };
}

export function viewAction(viewVo) {
    return function (dispatch) {
        dispatch(resourceViewPosting(viewVo.resourceId));

        var options = {
            method: "POST",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        let url;
        if (viewVo.accountId != null) {
            url = "/api/account/" + viewVo.accountId + "/resources/" + viewVo.resourceId + "/view";
        }
        else {
            url = "/api/resources/" + viewVo.resourceId + "/view";
        }
        fetch(url, options).then(response => {
            if (response.status == 200) {
                response.json().then(resourceDto =>{
                    console.log(resourceDto);
                    dispatch(resourceViewSuccess(resourceDto));
                });
            }
        });
    };
}



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