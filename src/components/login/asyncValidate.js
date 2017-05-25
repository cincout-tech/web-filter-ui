/**
 * Created by zhaoyu on 17-5-23.
 */

import {SubmissionError} from 'redux-form'

import {queryParams} from '../../actions/utils';

const asyncValidate = (values, dispatch, props, blurredField) => {
    var options = {
        method: "GET",
        mode: "cors",
        credentials:"include", // for cookie
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    if (blurredField == "userName" && values.userName) {
        let qs = queryParams({userName: values.userName});
        return fetch(`/api/accounts?` + qs, options).then(response => {
            if (response.status == 409) {
                throw {userName: '昵称已被使用'}
            }
        });
    }

    else if (blurredField == "phoneNumber" && values.phoneNumber) {
        let qs = queryParams({phoneNumber: values.phoneNumber});
        return fetch(`/api/accounts?` + qs, options).then(response => {
            if (response.status == 409) {
                throw {phoneNumber: '手机号已被使用，请登录或找回密码'}
            }
        });
    }

    else if (blurredField == "email" && values.email) {
        let qs = queryParams({email: values.email});
        return fetch(`/api/accounts?` + qs, options).then(response => {
            if (response.status == 409) {
                throw {email: '邮箱已被使用，请登录或找回密码'}
            }
        });
    }
    return new Promise((resolve, reject) => {
        resolve();
    });
}

export default asyncValidate;