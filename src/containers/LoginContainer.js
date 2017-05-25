/**
 * Created by zhaoyu on 17-3-17.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/login/LoginForm';
import { login, checkLogin } from '../actions/accounts';

function mapStateToProps(state, newProps) {
    console.log(state);
    return {
        session: state.session
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({login, checkLogin}, dispatch)};
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginContainer;
