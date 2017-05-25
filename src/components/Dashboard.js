/**
 * Created by zhaoyu on 17-5-25.
 */

import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Face from 'material-ui/svg-icons/action/face';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Visibility from 'material-ui/svg-icons/action/visibility';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import InfoBox from '../components/dashboard/InfoBox';

import {Grid, Row, Col} from 'react-flexbox-grid';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { statisticState, actions } = this.props;
        actions.statistic();
    }

    componentDidMount() {
        console.log("AuthContainer componentDidMount");
    }

    render() {
        const { statisticState } = this.props;
        if (statisticState.isQuerying) {
            return (
                <div>
                    Loading ...
                </div>
            );
        }
        const {statData} = statisticState;

        return (
            <Grid fluid className="grid-margin-clear">
                <Row>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={LibraryBooks}
                                 color={pink600}
                                 title="资源数"
                                 value={statData.totalResources}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={Face}
                                 color={cyan600}
                                 title="注册用户"
                                 value={statData.totalAccounts}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={ThumbUp}
                                 color={purple600}
                                 title="喜欢数量"
                                 value={statData.totalLikes}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <InfoBox Icon={Visibility}
                                 color={orange600}
                                 title="浏览量"
                                 value={statData.totalViews}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}