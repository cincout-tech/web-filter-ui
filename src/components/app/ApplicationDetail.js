/**
 * Created by zhaoyu on 17-3-8.
 */

import React from 'react';

import ApplicationCard from "./ApplicationCard";

const applicationDetail = {
    id: 1,
    name: "account-web",
    serviceType: "tomcat",
    agentList: [
        {
            agentId: "account-web01",
            startTimestamp: 123445556,
            host: "192.168.1.101",
            ip: "192.168.1.101",
            status: "Running",
            agentVersion: "1.6",
            licenceKey: {
                hashCode: "xxafsa14234345",
                expireIn: "2017-12-34"
            }
        },
        {
            agentId: "account-web02",
            startTimestamp: 123445556,
            host: "192.168.1.101",
            ip: "192.168.1.101",
            status: "Running",
            agentVersion: "1.6",
            licenceKey: {
                hashCode: "xxafsa14234345",
                expireIn: "2017-12-34"
            }
        },{
            agentId: "account-web03",
            startTimestamp: 123445556,
            host: "192.168.1.101",
            ip: "192.168.1.101",
            status: "Running",
            agentVersion: "1.6",
            licenceKey: {
                hashCode: "xxafsa14234345",
                expireIn: "2017-12-34"
            }
        }
    ]
}

export default class ApplicationDetail extends React.Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ApplicationCard applicationDetail={applicationDetail} />
            </div>

        );
    }

}