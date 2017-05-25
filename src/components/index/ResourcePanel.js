/**
 * Created by zhaoyu on 17-5-4.
 */

import React from 'react';


import {Grid, Row, Col} from 'react-flexbox-grid';
import ResourceList from "./ResourceList";
import RefreshIndicator from 'material-ui/RefreshIndicator';
import HomeHeader from "../header/HomeHeader";
import Pagination from "./Pagination";

export default class ResourcePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("ResourcePanel componentWillMount")
        const {searchState} = this.props;
        if (!searchState.isSearched) {
            this.context.router.push("/");
        }
    }

    render() {
        const {searchState, session, actions} = this.props;
        if (searchState.isSearching) {
            return (
                <div>
                    <RefreshIndicator
                        top={10}
                        left={20}
                        size={50}
                        loadingColor="#FF9800"
                        status="loading"
                    />
                </div>);
        }
        if (searchState.isSearched) {
            return (
                <Grid fluid className="grid-margin-clear">
                    <HomeHeader searchState={searchState} search={actions.search} session={session}/>
                    <ResourceList  {...this.props}/>
                    <Pagination searchState={searchState} search={actions.search}/>
                </Grid>
            );
        }
        return (
            <div></div>
        );
    }
}

ResourcePanel.contextTypes = {
    router: React.PropTypes.object
};