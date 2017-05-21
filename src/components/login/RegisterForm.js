/**
 * Created by zhaoyu on 17-1-20.
 */

import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
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


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleLoginClick() {
        this.context.router.push("login");
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("register action");
    }

    render() {
        const styles = {
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
            },
            btn: {
                background: '#4f81e9',
                color: white,
                padding: 7,
                borderRadius: 2,
                margin: 2,
                fontSize: 13
            },
            btnFacebook: {
                background: '#4f81e9'
            },
            btnGoogle: {
                background: '#e14441'
            },
            btnSpan: {
                marginLeft: 5
            },
        };
        return (
            <Grid fluid className="grid-margin-clear">
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
                                            floatingLabelText="手机"
                                            fullWidth={true}
                                            value={this.state.email}
                                        />
                                        <TextField
                                            floatingLabelText="邮箱"
                                            fullWidth={true}
                                            value={this.state.email}
                                        />
                                        <TextField
                                            floatingLabelText="密码"
                                            fullWidth={true}
                                            type="password"
                                            value={this.state.password}
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
            </Grid>
        );
    }
}

RegisterForm.contextTypes = {
    router: React.PropTypes.object
};
export default RegisterForm;