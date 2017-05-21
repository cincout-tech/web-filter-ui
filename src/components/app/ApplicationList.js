/**
 * Created by zhaoyu on 17-3-7.
 */
import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

import ApplicationCard from './ApplicationCard';

class ApplicationList extends React.Component {
    render() {

        const {applicationList} = this.props;

        return (
            <Row>
                {
                    applicationList.map((applicationDetail, index) =>
                        <Col key={applicationDetail.id} xs={12} sm={12} md={12} lg={12}>
                            <ApplicationCard key={index} applicationDetail={applicationDetail}/>
                        </Col>
                    )
                }
            </Row>
        );
    }
}

export default ApplicationList;