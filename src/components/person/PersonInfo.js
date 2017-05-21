/**
 * Created by zhaoyu on 17-3-9.
 */
import React from 'react';

import {Tabs, Tab} from 'material-ui';
import {Paper} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SwipeableViews from 'react-swipeable-views';

import { Row, Col } from 'react-flexbox-grid';

const BasicInfo = (props) => {
    return (
        <Table fixedFooter={false} selectable={false}>
            <TableBody displayRowCheckbox={false} stripedRows={true}>
                <TableRow>
                    <TableRowColumn>昵称</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>

                </TableRow>
                <TableRow>
                    <TableRowColumn>邮箱</TableRowColumn>
                    <TableRowColumn>zhangzhaoyu@163.com</TableRowColumn>

                </TableRow>
                <TableRow>
                    <TableRowColumn>手机</TableRowColumn>
                    <TableRowColumn>18511929810</TableRowColumn>

                </TableRow>
                <TableRow>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const CompanyInfo = (props) => {
    return (
        <Table fixedFooter={false} selectable={false}>
            <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>公司名</TableRowColumn>
                    <TableRowColumn>酷丁科技</TableRowColumn>

                </TableRow>
                <TableRow>
                    <TableRowColumn>公司地址</TableRowColumn>
                    <TableRowColumn>金融街</TableRowColumn>

                </TableRow>
                <TableRow>
                    <TableRowColumn>公司电话</TableRowColumn>
                    <TableRowColumn>18511929810</TableRowColumn>

                </TableRow>
                <TableRow>
                    <TableRowColumn>所属行业</TableRowColumn>
                    <TableRowColumn>信息通讯</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default class PersonInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0
        };
    }

    handleChange = (value) => {
        this.setState({
                slideIndex: value
            }
        );
    }

    render() {
        return (
            <div>
                <Paper>
                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}
                    >
                        <Tab label="基本信息" value={0}/>
                        <Tab label="企业信息" value={1}/>
                        <Tab label="图像" value={2}/>
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}
                    >
                        <div>
                            <BasicInfo/>
                        </div>
                        <div >
                            <CompanyInfo/>
                        </div>
                        <div>
                            slide n°3
                        </div>
                    </SwipeableViews>
                </Paper>
            </div>
        );
    }
}