/**
 * Created by zhaoyu on 17-3-2.
 */

import React from 'react';
import {List, ListItem, Divider, Checkbox, Subheader, Chip} from 'material-ui';
import {cyan600, white, red600, black} from 'material-ui/styles/colors';
import {spacing, typography} from 'material-ui/styles';
import {RaisedButton, FlatButton} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Badge from 'material-ui/Badge';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { TextField } from "material-ui";

import {Row, Col} from 'react-flexbox-grid';

import PageBase from '../PageBase';

export default class PriceCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseNum : 1
        };
    }

    componentWillMount() {
        console.log("PriceCard componentWillMount");
        const {priceDetail} = this.props;
        console.log(priceDetail);
    }

    handlePurchaseNumChange(event, newValue) {
        event.preventDefault();
        this.setState({
            purchaseNum : newValue
        });
    }

    handlePurchaseOrder(event) {
        event.preventDefault();
        const {priceDetail} = this.props;

        let orderDetails = {
            priceListId: priceDetail.id,
            purchaseNum: this.state.purchaseNum
        };
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
            purchaseNum: {
                marginLeft: 25,
                marginRight: 25,
                paddingTop: 25,
                paddingBottom: 25,
                fontSize: 18,
                height: 'auto',
            },
            purchaseButton: {
                marginLeft: 25,
                marginRight: 25,
                paddingTop: 25,
                paddingBottom: 25,
                fontSize: 20,
                color: red600,
                fontWeight: typography.fontWeightMedium,
                height: 'auto'
            }
        };

        return (
            <PageBase>
                <List>
                    <Subheader style={styles.subheader}>{priceDetail.title}</Subheader>
                    <Divider/>
                    {
                        priceDetail.serviceItems.map((item, index) =>
                            <ListItem
                                key={item.id}
                                rightIcon={<ContentAdd/>}
                                leftCheckbox={<Checkbox checked={true}/>}
                                primaryText={item.name}
                                secondaryText={item.description}
                            />
                        )
                    }
                </List>
                <Divider/>
                <div style={styles.purchaseNum}>
                    <Row>
                        <Col xs={6} style={{paddingTop:15}}>
                            购买数量：
                        </Col>
                        <Col xs={6}>
                            <TextField
                                hintText="Type a number"
                                fullWidth={true}
                                defaultValue={this.state.purchaseNum}
                                type="number"
                                onChange={this.handlePurchaseNumChange.bind(this)}
                            />
                        </Col>
                    </Row>
                </div>
                <Divider/>
                <div style={styles.purchaseButton}>
                    <Row>
                        <Col xs={6}>
                            <span style={{fontSize: 14, color:black}}>总计:</span>
                            <span> &#65509;{Math.floor(priceDetail.totalPrice * priceDetail.discount) * this.state.purchaseNum}</span>
                        </Col>
                        <Col xs={6}>
                            <Row end="xs">
                                <Col xs={12}>
                                    <RaisedButton
                                        primary={true}
                                        label="立即购买"
                                        onTouchTap={this.handlePurchaseOrder.bind(this)}
                                    />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </PageBase>
        );
    }
}