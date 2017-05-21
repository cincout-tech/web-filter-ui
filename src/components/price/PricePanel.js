/**
 * Created by zhaoyu on 17-3-2.
 */
import React from 'react';
import {green300, green400, blue300, orange300, lightWhite, white, grey100, grey200,black} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';

import {Grid, Row, Col} from 'react-flexbox-grid';

import PriceCard from './PriceCard';
import PriceInstance from './PriceInstance';

export default class PricePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'basic',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    componentWillMount() {
        console.log("PricePanel componentWillMount");
        const {priceStandard, actions} = this.props;
        actions.queryPriceList();
    }

    componentWillReceiveProps(newProps) {
        console.log("PricePanel componentWillReceiveProps");
    }

    render() {
        const styles = {
            tabBasic : {
                color: black,
                fontSize: 18,
                backgroundColor: grey100
            },

            tabCustomize : {
                color: black,
                fontSize: 18,
                backgroundColor:grey200
            },

            basicPriceContainer: {
                marginTop: 10
            }
        };


        const {priceStandard} = this.props;


        const colors = [green300, blue300, orange300];
        if (priceStandard.isFetching) {
            return null;
        }

        let priceCardList = [];
        priceStandard.priceList.map((priceDetail, index) => {
            priceCardList.push(
                <Col key={index} xs={12} sm={6} md={4} lg={4}>
                    <PriceCard subHeaderColor={colors[index]} priceDetail={priceDetail}/>
                </Col>
            );
        });

        return (
        <Grid fluid className="container-fixed-margin">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="基础配置" value="basic" style={styles.tabBasic}>
                            <div style={styles.basicPriceContainer}>
                                <Row>{priceCardList}</Row>
                            </div>
                        </Tab>
                        <Tab label="自定义配置" value="customize" style={styles.tabCustomize}>
                            <div>
                                <PriceInstance/>
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Grid>
        );
    }
}