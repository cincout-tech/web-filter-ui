/**
 * Created by zhaoyu on 17-3-2.
 */
import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';

import {Grid, Row, Col} from 'react-flexbox-grid';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Grid fluid className="grid-margin-clear">
                <Row>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={ShoppingCart}
                                 color={pink600}
                                 title="Total Profit"
                                 value="1500k"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={ThumbUp}
                                 color={cyan600}
                                 title="Likes"
                                 value="4231"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={Assessment}
                                 color={purple600}
                                 title="Sales"
                                 value="460"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={Face}
                                 color={orange600}
                                 title="New Members"
                                 value="248"
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}