/**
 * Created by zhaoyu on 17-5-20.
 */
import React from 'react';
import {IconButton, IconMenu, MenuItem,} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppConfig from "../../../dist/data/AppConfig";

export default class LogoutRightAppMenu extends React.Component {

    handleLogin(event) {
        this.context.router.push("login");
    }

    onFeedbackMenuTouchTap(event) {
        event.preventDefault();
        window.open(AppConfig.feedbackUrl, '_blank');
    }

    render() {
        const {iconMenuColor} = this.props;

        return (
            <div>
                <IconMenu color={iconMenuColor}
                          iconButtonElement={
                              <IconButton><MoreVertIcon color={iconMenuColor}/></IconButton>
                          }
                          targetOrigin={{horizontal: 'right', vertical: 'top'}}
                          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="登录" onTouchTap={this.handleLogin.bind(this)}/>
                    <MenuItem primaryText="反馈" onTouchTap={this.onFeedbackMenuTouchTap.bind(this)}/>
                </IconMenu>
            </div>
        );
    }
}

LogoutRightAppMenu.contextTypes = {
    router: React.PropTypes.object
};
