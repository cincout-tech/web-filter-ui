/**
 * Created by zhaoyu on 17-5-5.
 */

import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import {green400} from 'material-ui/styles/colors';

import {Row, Col} from 'react-flexbox-grid';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Pagination componentDidUpdate");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Pagination componentWillReceiveProps");
    }

    previousTouchTap() {
        const {searchState} = this.props;
        const {search} = this.props;
        let queryData = searchState.queryData;
        queryData.page = queryData.page - 1;
        search(queryData);
    }

    nextTouchTap() {
        const {searchState} = this.props;
        const {search} = this.props;
        let queryData = searchState.queryData;
        queryData.page = queryData.page + 1;
        search(queryData);
    }

    render() {
        const {searchState} = this.props;
        const queryResult = searchState.queryResult;

        return (
            <Row>
                <Col xs={2} sm={3} md={2} lg={1} />
                <Col xs={4} sm={3} md={4} lg={3}>
                    <Row center="xs">
                        <Col xs={12}>
                            <FloatingActionButton
                                zDepth={1}
                                disabled={queryResult.first}
                                backgroundColor={green400}
                                onTouchTap={this.previousTouchTap.bind(this)}
                            >
                                <NavigationChevronLeft/>
                            </FloatingActionButton>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} sm={3} md={4} lg={3}>
                    <Row center="xs">
                        <Col xs={12}>
                            <FloatingActionButton
                                zDepth={1}
                                backgroundColor={green400}
                                disabled={queryResult.last}
                                onTouchTap={this.nextTouchTap.bind(this)}
                            >
                                <NavigationChevronRight/>
                            </FloatingActionButton>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} sm={3} md={2} lg={5} />
            </Row>
        );
    }
}