/**
 * Created by zhaoyu on 17-3-2.
 */

import React from 'react';
import {List, ListItem, Divider, Checkbox, Subheader, Chip} from 'material-ui';
import {cyan600, white, red600} from 'material-ui/styles/colors';
import {spacing, typography} from 'material-ui/styles';
import {RaisedButton, FlatButton} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Badge from 'material-ui/Badge';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {Grid, Row, Col} from 'react-flexbox-grid';

import PageBase from '../PageBase';

export default class PriceInstance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {subHeaderColor, priceDetail} = this.props;
        console.log("price card...");
        console.log(priceDetail);
        const styles = {
            subheader: {
                fontSize: 20,
                fontWeight: typography.fontWeightLight,
                backgroundColor: subHeaderColor,
                color: white
            },
            bottomButton: {
                margin: '5 0, 10, 0',
                height: 'auto',
                paddingBottom: 10,
                fontWeight: typography.fontWeightNormal,
                textAlign: 'center',
                color: red600,
                fontSize: 20
            },
            leftCol: {
                height: 120,
                fontSize: 18,
                fontWeight: 300,
                //textAlign: 'center',
                paddingTop: 30,
                //verticalAlign: 'middle'
            }
        };

        return (
            <PageBase>
                <Row>
                    <Col xs={3}>
                        <Row center="xs">
                            <Col xs={8} >
                                <div style={styles.leftCol}>
                                    数据存储
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={9}>
                        <div>
                            报表
                        </div>
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col xs={3}>
                        <Row center="xs">
                            <Col xs={8} >
                                <div style={styles.leftCol}>
                                    数据存储
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={9}>
                        <div>
                            报表
                        </div>
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col xs={3}>
                        <Row center="xs">
                            <Col xs={8} >
                                <div style={styles.leftCol}>
                                    数据存储
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={9}>
                        <div>
                            报表
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Row center="xs">
                            <Col xs={8} >
                                <div style={styles.leftCol}>
                                    总价: ￥1245
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={9}>
                        <div style={styles.leftCol}>
                            <RaisedButton primary={true} label="立即购买"/>
                        </div>
                    </Col>
                </Row>
            </PageBase>
        );
    }
}