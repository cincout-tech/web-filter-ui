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
        const {searchState, session, actions} = this.props;
        let resourceList = [];
        searchState.queryResult.content.map((resource, index) => {
            resourceList.push(<Resource key={index} resource={resource} actions={actions} session={session}/>);
        });

        return (
            <div>
                {resourceList}
            </div>
        );
    }
}