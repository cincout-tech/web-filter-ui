/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {browserHistory} from 'react-router';
import {grey500, white, green200, lightGreen400} from 'material-ui/styles/colors';
import {Field, reduxForm} from 'redux-form'
import asyncValidate from './asyncValidate';

import {Paper} from 'material-ui';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';


const validate = (values) => {
    const errors = {};
    const requiredFields = ["userName", "phoneNumber", "email", "password"];
    requiredFields.forEach(field => {
       if (!values[field]) {
           errors[field] = "不能为空";
       }
    });

    if (values.userName && (values.userName.length > 18 || values.userName.length < 5)) {
        errors.userName = `用户名必须在${5}到${18}个字符之间`;
    }

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "邮箱格式错误";
    }

    if (values.phoneNumber && !/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/i.test(values.phoneNumber)) {
        errors.phoneNumber = "手机号格式错误";
    }
    return errors
}

const renderTextField = ({input, label, type, meta: {asyncValidating, touched, error}, ...custom}) => (
    <TextField
        floatingLabelText={label}
        fullWidth={true}
        type={type}
        errorText={touched && error}
        {...input}
        {...custom}
    />
)

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticeSnackbar: {
                open: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(values) {
        const {actions, session, registerState} = this.props;

        actions.register(values);
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

        const {handleSubmit, pristine, reset, submitting} = this.props;

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
                                    <form onSubmit={handleSubmit(this.handleSubmit)}>
                                        <Field name="userName" type="text" component={renderTextField} label="昵称"/>
                                        <Field name="phoneNumber" type="text" component={renderTextField} label="手机号"/>
                                        <Field name="email" type="text" component={renderTextField} label="邮箱"/>
                                        <Field name="password" type="password" component={renderTextField} label="密码"/>
                                        <div>
                                            <RaisedButton type="submit" label="注 册"
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
export default reduxForm({
    form: "registerForm",
    validate,
    asyncValidate,
    asyncBlurFields: ["userName", "phoneNumber", "email"]
})(RegisterForm);