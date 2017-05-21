/**
 * Created by zhaoyu on 17-1-19.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router';

import AuthContainer from './containers/AuthContainer';
import App from './components/App';

import RegisterForm from './components/login/RegisterForm';

import ApplicationListPanel from './containers/ApplicationListPanel';
import Dashboard from './containers/Dashboard';
import PersonInfo from './components/person/PersonInfo';
import Configuration from './components/config/Configuration';

import SearchHome from './containers/SearchHome';
import ResourcesContainer from './containers/ResourcesContainer';
import ResourceFormContainer from './containers/ResourceFormContainer';
import LoginContainer from "./containers/LoginContainer";

function auth() {
    console.log("hello");
}

export default (
    <Route path="/" onEnter={auth} component={App}>
        <IndexRoute component={SearchHome}/>
        <Route path={"resources"} component={ResourcesContainer}/>
        <Route path={"login"} component={LoginContainer}/>
        <Route path="register" component={RegisterForm}/>

        <Route component={AuthContainer}>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="resource" component={ResourceFormContainer}/>
            <Route path="info" component={PersonInfo}/>
            <Route path={"settings"} component={Configuration}/>
        </Route>
    </Route>

);