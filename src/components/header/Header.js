/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';
import {
    AppBar,
    IconButton,
    FlatButton,
    RaisedButton,
    IconMenu,
    MenuItem

} from 'material-ui';
import {spacing, typography} from 'material-ui/styles';
import {white, black, blue500, green200} from 'material-ui/styles/colors';
import {Grid, Row, Col} from 'react-flexbox-grid';

import {Link} from 'react-router';
import OnlineRightAppMenu from "./OnlineRightAppMenu";
import LogoutRightAppMenu from "./LogoutRightAppMenu";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        console.log("Header componentWillMount")
        const {session} = this.props;
    }


    handleClose() {
        this.setState({open: false});
    };

    handleOpen() {
        this.setState({open: true});
    }

    handleLogout() {
        const {actions} = this.props;
        actions.logout();
    }

    render() {
        const styles = {
            header: {
                backgroundColor: white
            }
        };

        const {session} = this.props;

        return (
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className="col-margin-clear">
                    <AppBar
                        zDepth={0}
                        iconElementLeft={<div></div>}
                        iconElementRight={
                            session.isLogin ? <OnlineRightAppMenu account={session.account} iconMenuColor={black}/>
                                : <LogoutRightAppMenu iconMenuColor={black}/>
                        }
                        style={styles.header}
                    />
                </Col>
            </Row>
        );
    }
}

Header.contextTypes = {
    router: React.PropTypes.object
};


export default Header;