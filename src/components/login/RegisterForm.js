/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {browserHistory} from 'react-router';
import {grey500, white, green200, lightGreen400} from 'material-ui/styles/colors';

import {Paper} from 'material-ui';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerVo: {
                userName:"",
                phoneNumber:"",
                email: "",
                password: ""
            },
            noticeSnackbar: {
                open: false
            }
        };
    }


    handleUserNameChange(event) {
        event.preventDefault();
        this.setState({
            registerVo: {
                ...this.state.registerVo,
                userName: event.target.value
            }
        });
    }

    handlePhoneNumberChange(event) {
        event.preventDefault();
        this.setState({
            registerVo: {
                ...this.state.registerVo,
                phoneNumber: event.target.value
            }
        });
    }

    handleEmailChange(event) {
        event.preventDefault();
        this.setState({
            registerVo: {
                ...this.state.registerVo,
                email: event.target.value
            }
        });
    }

    handlePasswordChange(event) {
        event.preventDefault();
        this.setState({
            registerVo: {
                ...this.state.registerVo,
                password: event.target.value
            }
        });
    }

    handleLoginClick() {
        this.context.router.push("/login");
    }

    handleRequestClose = () => {
        this.setState({
            noticeSnackbar: {
                open: false
            }
        });
        this.context.router.push("/login");
    }

    componentWillReceiveProps(nextProps) {
        const {registerState} = nextProps;
        if (registerState.isRegistered) {
            this.setState({
                noticeSnackbar: {
                    open: true
                }
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const {actions, session, registerState} = this.props;

        let registerVo = {
            ...this.state.registerVo
        };
        actions.register(registerVo);
        console.log("register action");
    }

    render() {
        const styles = {
            registerFormContainer: {
                marginTop: '4%'
            },
            image: {
                width:'auto',
                height:100
            },
            buttonsDiv: {
                textAlign: 'center',
                padding: 10
            },
            flatButton: {
                color: grey500
            },
            btn: {
                background: '#4f81e9',
                color: white,
                padding: 7,
                borderRadius: 2,
                margin: 2,
                fontSize: 13
            },
            btnSpan: {
                marginLeft: 5
            },
            snackbar: {
                backgroundColor: lightGreen400
            }
        };
        return (
            <Grid fluid className="grid-margin-clear" style={styles.registerFormContainer}>
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
                                            floatingLabelText="昵称"
                                            fullWidth={true}
                                            value={this.state.registerVo.userName}
                                            onChange={this.handleUserNameChange.bind(this)}
                                        />
                                        <TextField
                                            floatingLabelText="手机"
                                            fullWidth={true}
                                            value={this.state.registerVo.phoneNumber}
                                            onChange={this.handlePhoneNumberChange.bind(this)}
                                        />
                                        <TextField
                                            floatingLabelText="邮箱"
                                            fullWidth={true}
                                            value={this.state.registerVo.email}
                                            onChange={this.handleEmailChange.bind(this)}
                                        />
                                        <TextField
                                            floatingLabelText="密码"
                                            fullWidth={true}
                                            type="password"
                                            value={this.state.registerVo.password}
                                            onChange={this.handlePasswordChange.bind(this)}
                                        />
                                        <div>
                                            <RaisedButton type="submit" label="注 册"
                                                          backgroundColor={green200}
                                                          labelColor={white}
                                                          />

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
                                        label="登 录"
                                        onTouchTap={this.handleLoginClick.bind(this)}
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
                <Row>
                    <Col xs={12}>
                        <Snackbar
                            open={this.state.noticeSnackbar.open}
                            message="用户注册成功"
                            autoHideDuration={3000}
                            bodyStyle={styles.snackbar}
                            onRequestClose={this.handleRequestClose}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

RegisterForm.contextTypes = {
    router: PropTypes.object
};
export default RegisterForm;