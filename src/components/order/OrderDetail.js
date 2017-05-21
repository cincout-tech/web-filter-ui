/**
 * Created by zhaoyu on 17-3-8.
 */
import React from 'react';

import { Paper, Subheader, Divider, FlatButton, RaisedButton } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router';

const orderDetail = {
    id: 4,
    orderNumber: "20170204123",
    serviceType: "月报价/399RMB",
    startTime: "2017-03-06",
    jvmSize: 8,
    totalPrice: 3456,
    licenceKey :[
        {
            id:1,
            hashCode: "xxafsa14234345",
            agentId: "none",
            expireIn: "2017-12-34"
        },{
            id: 2,
            hashCode: "xxafsa14234345",
            agentId: "none",
            expireIn: "2017-12-34"
        },{
            id: 3,
            hashCode: "xxafsa14234345",
            agentId: "none",
            expireIn: "2017-12-34"
        },{
            id: 4,
            hashCode: "xxafsa14234345",
            agentId: "consumer-01",
            expireIn: "2017-12-34"
        }
    ]
};

export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("get orderDetails : " +  this.props.params.orderNumber);
    }

    render() {

        const styles = {
            card: {
                marginBottom:20
            },
            cardHeader: {
                fontSize: 20
            },
            cardTitle : {
                fontSize: 16
            },
            licenceKeyButton: {
                fontSize: 12
            }

        };

        //const {orderDetail} = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Card style={styles.card} >
                    <CardHeader
                        title={"订单号: " + orderDetail.orderNumber}
                        subtitle={orderDetail.serviceType}
                        titleStyle={styles.cardHeader}
                    />

                    <CardTitle
                        title="订单详情"
                        titleStyle={styles.cardTitle}
                    />

                    <CardText>
                        <Table fixedFooter={false} >
                            <TableHeader adjustForCheckbox={false} enableSelectAll={false} displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn>时间</TableHeaderColumn>
                                    <TableHeaderColumn>报价类型</TableHeaderColumn>
                                    <TableHeaderColumn>Jvm数量</TableHeaderColumn>
                                    <TableHeaderColumn>总价</TableHeaderColumn>
                                    <TableHeaderColumn>状态</TableHeaderColumn>
                                    <TableHeaderColumn hoverable={false}>操作</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>{orderDetail.startTime}</TableRowColumn>
                                    <TableRowColumn>{orderDetail.serviceType}</TableRowColumn>
                                    <TableRowColumn>{orderDetail.jvmSize}</TableRowColumn>
                                    <TableRowColumn>{orderDetail.totalPrice}</TableRowColumn>
                                    <TableRowColumn>{orderDetail.isPaid ? "paid" : "not paid"}</TableRowColumn>
                                    <TableRowColumn>
                                        <RaisedButton primary={true} label="延长订单"/>
                                    </TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardText>

                    <CardTitle
                        title="HashCode 列表"
                        titleStyle={styles.cardTitle}
                    />
                    <CardText >
                        <Table fixedFooter={false} selectable={false}>
                            <TableHeader adjustForCheckbox={false} enableSelectAll={false} displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn>HashCode</TableHeaderColumn>
                                    <TableHeaderColumn>ExpireIn</TableHeaderColumn>
                                    <TableHeaderColumn>AgentID</TableHeaderColumn>
                                    <TableHeaderColumn hoverable={false}>操作</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {
                                    orderDetail.licenceKey.map((licence, index) =>
                                        <TableRow key={index}>
                                            <TableRowColumn>{licence.hashCode}</TableRowColumn>
                                            <TableRowColumn>{licence.expireIn}</TableRowColumn>
                                            <TableRowColumn>
                                                <FlatButton
                                                    children={<Link to={"application/detail/" + licence.agentId} />}
                                                    label={licence.agentId}
                                                    primary={true}
                                                    labelStyle={styles.licenceKeyButton}
                                                />
                                            </TableRowColumn>
                                            <TableRowColumn>
                                                <RaisedButton primary={true} label="延长服务"/>
                                            </TableRowColumn>
                                        </TableRow>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </CardText>
                </Card>
            </div>
        );
    }
}