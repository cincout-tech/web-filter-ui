/**
 * Created by zhaoyu on 17-3-7.
 */

import React from 'react';
import {Paper, Subheader, Divider, FlatButton, RaisedButton} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';

class ApplicationCard extends React.Component {
    constructor(props) {
        super(props);
    }

    openAccessDetail(event) {
        event.preventDefault();
        const {applicationDetail} = this.props;
        var win = window.open(applicationDetail.accessUrl, '_blank');
        win.focus();
    }

    openStatisticReport(event) {
        event.preventDefault();
        alert("on the road ...");
    }

    render() {
        const {applicationDetail} = this.props;
        const styles = {
            card: {
                marginBottom: 20
            },
            cardHeader: {
                fontSize: 20
            },
            cardTitle: {
                fontSize: 16
            },
            licenceKeyButton: {
                fontSize: 12
            }

        };

        return (
            <Card style={styles.card}>
                <CardHeader
                    title={applicationDetail.name}
                    subtitle={applicationDetail.serviceType}
                    titleStyle={styles.cardHeader}
                />
                <CardActions>
                    <FlatButton onTouchTap={this.openAccessDetail.bind(this)} primary={true} label="访问详情"/>
                    <FlatButton onTouchTap={this.openStatisticReport.bind(this)} secondary={true} label="统计报表"/>
                </CardActions>

                <CardTitle
                    actAsExpander={true}
                    showExpandableButton={true}
                    title="实例列表"
                    titleStyle={styles.cardTitle}
                />
                <CardText expandable={true}>
                    <Table fixedFooter={false} selectable={false}>
                        <TableHeader adjustForCheckbox={false} enableSelectAll={false} displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>AgentID</TableHeaderColumn>
                                <TableHeaderColumn>Host</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                                <TableHeaderColumn>Start Time</TableHeaderColumn>
                                <TableHeaderColumn>Licence Key</TableHeaderColumn>
                                <TableHeaderColumn>ExpireIn</TableHeaderColumn>
                                <TableHeaderColumn hoverable={false}>操作</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {
                                applicationDetail.agentList.map((agent, index) =>
                                    <TableRow key={index}>
                                        <TableRowColumn>{agent.agentId}</TableRowColumn>
                                        <TableRowColumn>{agent.host}</TableRowColumn>
                                        <TableRowColumn>{agent.status}</TableRowColumn>
                                        <TableRowColumn>{agent.startTimestamp}</TableRowColumn>
                                        <TableRowColumn>
                                            <FlatButton
                                                label={agent.licenceKey.hashCode}
                                                primary={true} href={"/#/order/detail/" + agent.licenceKey.hashCode}
                                                labelStyle={styles.licenceKeyButton}
                                            />
                                        </TableRowColumn>
                                        <TableRowColumn>{agent.licenceKey.expireIn}</TableRowColumn>
                                        <TableRowColumn hoverable={false}>
                                            <RaisedButton primary={true} label="延长服务"/>
                                        </TableRowColumn>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
        );
    }
}

export default ApplicationCard;