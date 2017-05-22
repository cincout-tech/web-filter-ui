/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {grey500, white, green200} from 'material-ui/styles/colors';

import {Paper} from 'material-ui';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    componentWillMount() {
        console.log("LoginForm componentWillMount...");
    }

    componentWillReceiveProps(newProps) {
        const { session } = newProps;
        console.log("LoginForm componentWillReceiveProps");
        if (session.isLogin) {
            this.context.router.push("dashboard");
        } else {
            console.log("not login");
        }
    }

    handleUserNameChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleRegisterClick() {
        this.context.router.push("register");
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("login action");
        const {actions, session} = this.props;
        console.log(session);
        var accountVo = {
            email: this.state.email,
            password: this.state.password
        };
        actions.login(accountVo);
        console.log("submit...");
    }

    render() {
        const styles = {
            loginFormContainer: {
                marginTop: '4%'
            },
            image: {
                width: 'auto',
                height: 100
            },
            buttonsDiv: {
                textAlign: 'center',
                padding: 10
            },
            flatButton: {
                color: grey500
            },
            checkRemember: {
                style: {
                    float: 'left',
                    maxWidth: 180,
                    paddingTop: 5
                },
                labelStyle: {
                    color: grey500
                },
                iconStyle: {
                    color: grey500,
                    borderColor: grey500,
                    fill: grey500
                }
            },
            loginBtn: {
                float: 'right'
            }
        };

        const {actions, session} = this.props;

        return (
            <Grid fluid className="grid-margin-clear" style={styles.loginFormContainer}>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={12} sm={8} md={6} lg={4}>
                                <Link to="/"><img src="style/images/logo_with_cincout_small.png" style={styles.image}/></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={12} sm={8} md={6} lg={3}>
                                <Paper zDepth={0}>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <TextField
                                            floatingLabelText="邮箱/手机"
                                            fullWidth={true}
                                            value={this.state.email}
                                            onChange={this.handleUserNameChange.bind(this)}
                                        />
                                        <TextField
                                            floatingLabelText="密码"
                                            fullWidth={true}
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange.bind(this)}
                                        />

                                        <div>
                                            <RaisedButton type="submit" label="登 录"
                                                          backgroundColor={green200}
                                                          labelColor={white}/>

                                        </div>
                                    </form>
                                </Paper>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} >
                                <div style={styles.buttonsDiv}>
                                    <FlatButton
                                        label="注册"
                                        onTouchTap={this.handleRegisterClick.bind(this)}
                                        style={styles.flatButton}
                                        icon={<PersonAdd />}
                                    />

                                    <FlatButton
                                        label="忘记密码?"
                                        href="/"
                                        style={styles.flatButton}
                                        icon={<Help />}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
};

export default LoginForm;