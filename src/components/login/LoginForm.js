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
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import asyncValidate from "./asyncValidate";

import {Field, reduxForm} from 'redux-form'
import submit from './submit';

const validate = (values) => {
    const errors = {};
    const requiredFields = ["principal", "password"];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "不能为空";
        }
    });

    if (values.principal && !/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/i.test(values.principal)
        && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.principal)) {
        errors.principal = "手机号或邮箱格式错误";
    }
    return errors
}

const renderTextField = ({input, label, type, meta: {touched, error}, ...custom}) => (
    <TextField
        floatingLabelText={label}
        fullWidth={true}
        errorText={touched && error}
        type={type}
        {...input}
        {...custom}
    />
)

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        console.log("LoginForm componentWillMount...");
    }

    componentWillReceiveProps(newProps) {
        const {session} = newProps;
        console.log("LoginForm componentWillReceiveProps");
        if (session.isLogin) {
            this.context.router.push("dashboard");
        } else {
            console.log("not login");
        }
    }

    handleRegisterClick() {
        this.context.router.push("register");
    }

    handleSubmit(values) {
        console.log("login action");
        const {actions, session, dispatch} = this.props;

        console.log("submit...");
        return submit(values, dispatch);
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
            }
        };

        const {actions, session, handleSubmit, pristine, reset, submitting, error} = this.props;

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
                                    <form onSubmit={handleSubmit(this.handleSubmit)}>
                                        <Field name="principal" type="text" component={renderTextField} label="邮箱/手机"/>
                                        <Field name="password" type="password" component={renderTextField} label="密码"/>
                                        <div>
                                            <RaisedButton type="submit" label="登 录"
                                                          backgroundColor={green200}
                                                          labelColor={white}
                                                          disabled={submitting}
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
                            <Col xs={6}>
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

export default reduxForm({
    form: "loginForm",
    validate
})(LoginForm);