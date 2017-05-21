/**
 * Created by zhaoyu on 17-1-19.
 */

import React from 'react';
import { connect } from 'react-redux';
import { hashHistory, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import { login, logout } from '../actions/accounts';
import Home from '../components/Home';

class AuthContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    componentWillMount() {
        console.log("AuthContainer componentWillMount");
        const { session } = this.props;

        if (!session.isLogin) {
            this.context.router.push("login");
        }
    }

    componentDidMount() {
        console.log("AuthContainer componentDidMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("AuthContainer componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("AuthContainer componentDidUpdate");
        console.log(prevProps);
        console.log(prevState);
        console.log(this.props);
        const {isLogin} = prevState;
        if (prevProps.session.isLogin && !this.props.session.isLogin) {
            this.context.router.push("login");
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("AuthContainer componentWillReceiveProps");
        /*const { session } = nextProps;
        console.log(session);

        if (!session.isLogin) {
            this.context.router.push("login");
        }*/
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }*/

    render() {
        const {session} = this.props;
        if (session.isLogin) {
            return (
                <Home {...this.props}/>
            );
        }
        else
            return (
                <div>
                    Loading...
                </div>
            );
    }

}

AuthContainer.contextTypes = {
    router: React.PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        session: state.session
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({login, logout}, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthContainer);
