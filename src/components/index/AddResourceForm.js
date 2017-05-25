/**
 * Created by zhaoyu on 17-5-9.
 */

import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {lightGreen400} from 'material-ui/styles/colors';

export default class AddResourceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resourceVo: {
                title: "",
                abstractContent: "",
                origin: "",
                link: "",
                tags: "",
                categories: "",
                accountId: 0,
                likeCount: 0,
                view: 0,
                createTime: new Date()
            },
            noticeSnackbar: {
                open: false
            }
        }
    }

    titleOnChange(event) {
        event.preventDefault();
        this.setState({
            resourceVo: {
                ...this.state.resourceVo,
                title: event.target.value
            }
        });
    }

    abstractContentOnChange(event) {
        event.preventDefault();
        this.setState({
            resourceVo: {
                ...this.state.resourceVo,
                abstractContent: event.target.value
            }
        });
    }

    tagsOnChange(event) {
        event.preventDefault();
        this.setState({
            resourceVo: {
                ...this.state.resourceVo,
                tags: event.target.value
            }
        });
    }

    categoriesOnChange(event) {
        event.preventDefault();
        this.setState({
            resourceVo: {
                ...this.state.resourceVo,
                categories: event.target.value
            }
        });
    }

    originOnChange(event) {
        event.preventDefault();
        this.setState({
            resourceVo: {
                ...this.state.resourceVo,
                origin: event.target.value
            }
        });
    }

    linkOnChange(event) {
        event.preventDefault();
        this.setState({
            resourceVo: {
                ...this.state.resourceVo,
                link: event.target.value
            }
        });
    }

    createTimeChange(event, date) {
        this.setState({
            resourceVo: {
                ...this.state.resourceVo,
                createTime: date
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const {resourcePostState} = nextProps;
        if (resourcePostState.isPosted) {
            this.setState({
                noticeSnackbar: {
                    open: true
                }
            });
            this.handleCleanAction();
        }
    }

    handleRequestClose = () => {
        this.setState({
            noticeSnackbar: {
                open: false
            }
        });
    }

    handleCleanAction = () => {
        this.setState({
            resourceVo: {
                title: "",
                abstractContent: "",
                origin: "",
                link: "",
                tags: "",
                categories: "",
                accountId: 0,
                likeCount: 0,
                view: 0,
                createTime: new Date()
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {actions, session} = this.props;
        let resourceVo = {
            ...this.state.resourceVo,
            createTime: this.state.resourceVo.createTime.getTime()
        };

        if (session.isLogin) {
            resourceVo.accountId = session.account.id;
        }

        console.log(resourceVo);
        actions.postResource(resourceVo);
    }

    render() {
        const styles = {
            resourceForm: {
                marginTop: 10
            },
            btnDiv: {
                marginTop: 15
            },

            datePicker: {
                width: '100%',
                marginTop: 15
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            snackbar: {
                backgroundColor: lightGreen400
            }
        };

        return (
            <Grid className="grid-margin-clear" style={styles.resourceForm}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Row>
                        <Col xs={12}>
                            <TextField
                                hintText="标题"
                                floatingLabelText="标题"
                                fullWidth={true}
                                value={this.state.resourceVo.title}
                                onChange={this.titleOnChange.bind(this)}
                            />
                        </Col>
                        <Col xs={12}>
                            <TextField
                                hintText="分类;分类;分类"
                                floatingLabelText="分类"
                                fullWidth={true}
                                value={this.state.resourceVo.categories}
                                onChange={this.categoriesOnChange.bind(this)}
                            />
                        </Col>
                        <Col xs={12}>
                            <DatePicker
                                floatingLabelText="创建时间"
                                hintText="创建时间"
                                textFieldStyle={styles.datePicker}
                                value={this.state.resourceVo.createTime}
                                onChange={this.createTimeChange.bind(this)}
                            />
                        </Col>
                        <Col xs={12}>
                            <TextField
                                hintText="来源"
                                floatingLabelText="来源"
                                fullWidth={true}
                                value={this.state.resourceVo.origin}
                                onChange={this.originOnChange.bind(this)}
                            />
                        </Col>
                        <Col xs={12}>
                            <TextField
                                hintText="http://"
                                floatingLabelText="链接"
                                fullWidth={true}
                                value={this.state.resourceVo.link}
                                onChange={this.linkOnChange.bind(this)}
                            />
                        </Col>
                        <Col xs={12}>
                            <TextField
                                hintText="标签;标签;标签;标签"
                                floatingLabelText="标签"
                                fullWidth={true}
                                value={this.state.resourceVo.tags}
                                onChange={this.tagsOnChange.bind(this)}
                            />
                        </Col>
                        <Col xs={12}>
                            <TextField
                                hintText="摘要"
                                floatingLabelText="摘要"
                                multiLine={true}
                                rows={2}
                                fullWidth={true}
                                value={this.state.resourceVo.abstractContent}
                                onChange={this.abstractContentOnChange.bind(this)}
                            />
                        </Col>

                        <Col xs={12} style={styles.btnDiv}>
                            <Row center="xs">
                                <Col xs={6} sm={3} md={2} lg={5}>
                                    <RaisedButton type="submit" label="提交" primary={true}/>
                                </Col>
                                <Col xs={6} sm={3} md={2} lg={5}>
                                    <RaisedButton label="清除" onTouchTap={this.handleCleanAction} secondary={true}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
                <Row>
                    <Col xs={12}>
                        <Snackbar
                            open={this.state.noticeSnackbar.open}
                            message="资源添加成功"
                            autoHideDuration={4000}
                            bodyStyle={styles.snackbar}
                            onRequestClose={this.handleRequestClose}
                        />
                    </Col>
                </Row>
            </Grid>

        )
    }
}