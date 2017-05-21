/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';
import {
    AppBar,
    Dialog,
    IconMenu,
    MenuItem,
    Avatar,
    IconButton,
    FlatButton,
    Badge
} from 'material-ui';
import {spacing, typography} from 'material-ui/styles';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import SearchIcon from 'material-ui/svg-icons/action/search';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {white, blue500, blue600, lightGreen200, green300, red500} from 'material-ui/styles/colors';

import {Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import AppConfig from "../../../dist/data/AppConfig";

class AccountHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }
    onFeedbackMenuTouchTap(event) {
        event.preventDefault();
        window.open(AppConfig.feedbackUrl, '_blank');
    }

    onTitleTouchTap(event) {
        this.context.router.push("/");
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
        const {styles, handleChangeRequestNavDrawer} = this.props;
        console.log(styles);

        const style = {
            appBar: {
                backgroundColor: lightGreen200
            },
            logo: {
                cursor: 'pointer',
                fontSize: 22,
                color: typography.textFullWhite,
                lineHeight: `${spacing.desktopKeylineIncrement}px`,
                fontWeight: typography.fontWeightLight,
                backgroundColor: lightGreen200
            },
            menuButton: {
                marginLeft: 0
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };

        const iconStyles = {
            marginRight: 24,
        };

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];

        return (
            <Row>
                <Col xs={12} className="col-margin-clear">
                    <AppBar
                        zDepth={0}
                        style={{...styles, ...style.appBar}}
                        title={<Link to={"/"}><Avatar style={{marginTop: 12}} src="style/images/cavia_logo2.png"
                                                   size={40}/></Link>}
                        /*onTitleTouchTap={this.onTitleTouchTap.bind(this)}*/
                        onLeftIconButtonTouchTap={handleChangeRequestNavDrawer}
                        iconStyleLeft={style.menuButton}
                        iconElementRight={
                            <div style={style.iconsRightContainer}>
                                {/*<IconMenu color={white}
                                 iconButtonElement={
                                 <IconButton><ViewModule color={white}/></IconButton>
                                 }
                                 targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                 anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                 >
                                 <MenuItem key={1} primaryText="Application 1"/>
                                 <MenuItem key={2} primaryText="Application 2"/>
                                 <MenuItem key={3} primaryText="Application 3"/>
                                 </IconMenu>*/}

                                <Link to={"/"}><SearchIcon color={white}/></Link>
                                <Badge
                                    onClick={this.handleOpen.bind(this)}
                                    badgeContent={10}
                                    primary={true}
                                    style={{paddingTop: 8, cursor: 'pointer'}}
                                    badgeStyle={{top: 0, right: 2}}
                                >
                                    <NotificationsIcon color={white} hoverColor={red500}/>
                                </Badge>
                                <IconMenu color={white}
                                          iconButtonElement={
                                              <IconButton><MoreVertIcon color={white}/></IconButton>
                                          }

                                          targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                >
                                    <MenuItem primaryText="退出" onTouchTap={this.handleLogout}/>
                                    <MenuItem primaryText="反馈" onTouchTap={this.onFeedbackMenuTouchTap.bind(this)}/>
                                </IconMenu>
                            </div>
                        }
                    />
                    <Dialog
                        title="Dialog With Actions"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose.bind(this)}
                    >
                        The actions in this window were passed in as an array of React objects.
                    </Dialog>
                </Col>
            </Row>
        );
    }
}

AccountHeader.contextTypes = {
    router: React.PropTypes.object
};

export default AccountHeader;