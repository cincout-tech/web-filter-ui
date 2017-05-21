/**
 * Created by zhaoyu on 17-3-20.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { browserHistory } from 'react-router';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import LeftDrawer from '../components/LeftDrawer';
import Data from '../data';
import AccountHeader from "./header/AccountHeader";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: false
        };

        this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
    }

    handleChangeRequestNavDrawer() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {
        let { navDrawerOpen } = this.state;
        const paddingLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                marginTop: 14,
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
            }
        };
        const { session } = this.props;

        // Injected by connect() call:
        return (
            <div>
                <AccountHeader {...this.props} styles={styles.header}
                        handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
                <LeftDrawer navDrawerOpen={navDrawerOpen}
                            menus={Data.menus}
                            name={session.account.name}/>
                <div style={styles.container} >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default Home;