/**
 * Created by zhaoyu on 17-3-7.
 */

import React from 'react';

import { Paper, Subheader, Divider, FlatButton, RaisedButton } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {cyan600, white, black} from 'material-ui/styles/colors';

import {Link} from 'react-router';

class OrderList extends React.Component {

    constructor(props) {
        super(props);

        this.handleServiceTypeClick = this.handleServiceTypeClick.bind(this);
    }

    handleServiceTypeClick(rowNumber, columnId) {
        console.log(rowNumber+ " " + columnId );
    }

    render() {

        const styles = {
            subHeader: {
                fontSize: 18,
                color: black
            },
            paper: {
                padding: 15
            }
        }

        const { orderList } = this.props;

        return (
            <div className="col-lg-12">
                <Paper style={styles.paper}>
                    <Subheader style={styles.subHeader}>订单列表</Subheader>
                    <Divider/>

                    <Table selectable={false} onCellClick={this.handleServiceTypeClick}>
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>订单号</TableHeaderColumn>
                                <TableHeaderColumn>服务类型</TableHeaderColumn>
                                <TableHeaderColumn tooltip={"hello"}>时间</TableHeaderColumn>
                                <TableHeaderColumn>Jvms数量</TableHeaderColumn>
                                <TableHeaderColumn>总价</TableHeaderColumn>
                                <TableHeaderColumn>状态</TableHeaderColumn>
                                <TableHeaderColumn>操作</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} multiSelectable={false}>

                            {
                                orderList.map((orderDetail, index) =>
                                    <TableRow key={index}>
                                        <TableRowColumn >{orderDetail.orderNumber}</TableRowColumn>
                                        <TableRowColumn >{orderDetail.serviceType}</TableRowColumn>
                                        <TableRowColumn>{orderDetail.startTime}</TableRowColumn>
                                        <TableRowColumn>{orderDetail.jvmSize}</TableRowColumn>
                                        <TableRowColumn>￥{orderDetail.totalPrice}</TableRowColumn>
                                        <TableRowColumn>{orderDetail.isPaid?"paid" : <Link to={"order/detail/" + orderDetail.orderNumber }>立即支付</Link>}</TableRowColumn>
                                        <TableRowColumn>
                                            <Link to={"order/detail/" + orderDetail.orderNumber }>订单详情</Link>
                                        </TableRowColumn>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default OrderList;