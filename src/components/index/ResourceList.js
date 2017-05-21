/**
 * Created by zhaoyu on 17-5-4.
 */

import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid';
import Resource from "./Resource";

export default class ResourceList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {queryResult} = this.props;
        let resourceList = [];
        queryResult.content.map((resource, index) => {
            resourceList.push(<Resource key={index} details={resource}/>);
        });

        return (
            <div>
                {resourceList}
            </div>
        );
    }
}