/**
 * Created by zhaoyu on 17-3-7.
 */

import React from 'react';

import ApplicationList from '../components/app/ApplicationList';

import Data from '../data';

export default class ApplicationListPanel extends React.Component {

    render() {
        return (
            <ApplicationList applicationList = {Data.applicationList}/>
        );
    }

}

