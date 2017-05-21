/**
 * Created by zhaoyu on 17-5-4.
 */
import React from 'react';
import {AppBar, Avatar, TextField} from 'material-ui';
import {spacing, typography} from 'material-ui/styles';
import {grey100, white, lightGreen200} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import {Row, Col} from 'react-flexbox-grid';
import OnlineRightAppMenu from "./OnlineRightAppMenu";
import LogoutRightAppMenu from "./LogoutRightAppMenu";


class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            keywords: ""
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        const {searchState} = this.props;
        console.log(searchState);

        if (searchState.queryData.keywords != null && searchState.queryData.keywords.length > 0) {
            this.setState({
                keywords: searchState.queryData.keywords
            });
        } else {
            console.log(searchState.queryData.keywords);
            console.log("not login");
        }
    }

    componentWillReceiveProps(newProps) {

    }

    handleKeywordChange(event) {
        this.setState({
            keywords: event.target.value
        });
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

    handleSubmit(event) {
        event.preventDefault();
        const {searchState, search} = this.props;
        let queryData = searchState.queryData;
        if (this.state.keywords.length < 1) {
            return;
        }
        queryData.keywords = this.state.keywords;
        search(queryData);
    }

    render() {
        const styles = {
            header: {
                backgroundColor: lightGreen200
            },
            searchBox: {
                container: {
                    marginLeft: 20,
                },
                textField: {
                    color: white,
                    borderRadius: 4

                },
                hintStyle: {
                    color: white
                },
                underlineStyle: {
                    borderColor: grey100,
                    borderWidth: 2
                },
                underlineFocusStyle: {
                    borderColor: white,
                    borderWidth: 3
                }
            }
        };
        const {session, searchState, search} = this.props;

        return (
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className="col-margin-clear">
                    <AppBar
                        zDepth={0}
                        title={
                            <Row>
                                <Col xs={12} sm={8} md={8} lg={3} style={styles.searchBox.container}>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <TextField
                                            hintText="搜索 ..."
                                            hintStyle={styles.searchBox.hintStyle}
                                            fullWidth={true}
                                            value={this.state.keywords}
                                            style={styles.searchBox.textField}
                                            underlineStyle={styles.searchBox.underlineStyle}
                                            underlineFocusStyle={styles.searchBox.underlineFocusStyle}
                                            onChange={this.handleKeywordChange.bind(this)}
                                        />
                                    </form>
                                </Col>
                            </Row>
                        }
                        iconElementLeft={
                            <Link to={"/"}><Avatar src="style/images/cavia_logo2.png" size={40}/></Link>
                        }
                        iconElementRight={
                            session.isLogin ? <OnlineRightAppMenu account={session.account} iconMenuColor={white}/>
                                : <LogoutRightAppMenu iconMenuColor={white}/>
                        }
                        style={styles.header}
                    />
                </Col>
            </Row>

        );
    }
}

HomeHeader.contextTypes = {
    router: React.PropTypes.object
};

export default HomeHeader;