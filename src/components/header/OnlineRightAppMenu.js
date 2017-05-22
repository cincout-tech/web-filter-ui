/**
 * Created by zhaoyu on 17-5-20.
 */

import React from 'react';
import PropTypes from 'prop-types';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppConfig from "../../../dist/data/AppConfig";

export default class OnlineRightAppMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    onFeedbackMenuTouchTap(event) {
        event.preventDefault();
        window.open(AppConfig.feedbackUrl, '_blank');
    }

    goToDashboard() {
        this.context.router.push("dashboard");
    }

    render() {
        const {account, iconMenuColor} = this.props;
        return (
            <div>
                <IconMenu color={iconMenuColor}
                          iconButtonElement={
                              <IconButton><MoreVertIcon color={iconMenuColor}/></IconButton>
                          }
                          targetOrigin={{horizontal: 'right', vertical: 'top'}}
                          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText={account.name} onTouchTap={this.goToDashboard.bind(this)}/>
                    <MenuItem primaryText="反馈" onTouchTap={this.onFeedbackMenuTouchTap.bind(this)}/>
                </IconMenu>
            </div>
        );
    }
}

OnlineRightAppMenu.contextTypes = {
    router: PropTypes.object
};