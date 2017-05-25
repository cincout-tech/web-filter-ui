/**
 * Created by zhaoyu on 17-5-24.
 */
import fetch from 'isomorphic-fetch';
import {SubmissionError} from 'redux-form';
import {login, checkLogin} from '../../actions/accounts';
import {isEmail, isPhoneNumber} from "../../utils/Validate";

function submit(loginVo, dispatch) {
    var result =  new Promise((resolve, reject)=> {
        let accountVo = {};
        if (isEmail(loginVo.principal)) {
            accountVo.email = loginVo.principal;
        }
        else if (isPhoneNumber(loginVo.principal)) {
            accountVo.phoneNumber = loginVo.principal;
        }
        accountVo.password = loginVo.password;

        var options = {
            method: "POST",
            mode: "cors",
            credentials:"include", // for cookie
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountVo)
        };

        console.log("sss");
        fetch(`/api/login`, options).then(response => {
            if (response.status == 200) {
                resolve(response.json());
            }

        });
    }).then((data) => {
        if (data.status === "OK") {
           dispatch(login(loginVo));
        }

        else if (data.status === "NOT_FOUND") {
            throw new SubmissionError({
                principal: "用户不存在",
                _error: 'Login failed!'
            });
        }
        else if (data.status == "BAD_REQUEST") {
            throw new SubmissionError({
                //password: data.msg.info,
                password: "密码错误",
                _error: 'Login failed!'
            })
        } else {
            window.alert(`You submitted:\n\n${JSON.stringify(loginVo, null, 2)}`)
        }
    });
    return result;
}

export default submit