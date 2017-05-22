/**
 * Created by zhaoyu on 17-5-22.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from '../components/login/RegisterForm';
import { register } from '../actions/registers';

function mapStateToProps(state, newProps) {
    console.log(state);
    return {
        session: state.session,
        registerState: state.registerState
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({register}, dispatch)};
}

const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

export default RegisterContainer;