/**
 * Created by zhaoyu on 17-5-4.
 */

import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import {blueGrey800, blue700, blueA400, lightGreenA700, lightBlack} from 'material-ui/styles/colors';
import moment from 'moment';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    handleViewAction(resourceId) {
        const {session, actions, resource} = this.props;
        if (!session.isLogin) {
            actions.viewAction({
                accountId: null,
                resourceId: resource.id
            });
        }
        else {
            actions.viewAction({
                accountId: session.account.id,
                resourceId: resource.id
            });
        }
        window.open(resource.link, '_blank');
    }

    render() {
        const cardHeader = {
            title: {
                fontSize: 20,
                color: blue700,
                textColor: blue700
            },
            subTitle: {
                fontSize: 14
            }
        };
        const {resource} = this.props;
        return (
            <div>
                <div style={cardHeader.title}>
                    <a href="javascript:void(0);" onClick={this.handleViewAction.bind(this)} style={{color: blueA400}} target="_blank">{resource.title}</a>
                </div>
                <div style={cardHeader.subTitle}>
                    <span style={{color: lightBlack}}>{resource.link}</span>
                </div>
            </div>
        );
    }
}

const Content = (props) => {
    const contentStyle = {
        fontSize: 14
    };

    return (
        <div style={contentStyle}>
            <p>{props.abstract}</p>
        </div>
    );
};

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLike(resourceId) {
        const {session, actions, resource} = this.props;
        console.log(session);
        if (!session.isLogin) {
            this.context.router.push("login");
        } else {
            actions.likeAction({
                accountId: session.account.id,
                resourceId: resource.id
            });
        }

    }

    render() {
        const {resource, session} = this.props;
        const footerStyle = {
            span: {
                marginRight: 8
            }
        };

        return (
            <div>
                <span style={footerStyle.span}>{moment(resource.date).format('YYYY-MM-DD').toString()}</span>
                <span style={footerStyle.span}>浏览: {resource.view}</span>
                <span style={footerStyle.span}><a href="javascript:void(0);" onClick={this.handleLike.bind(this)}>喜欢: {resource.likeCount}</a></span>
                <span style={footerStyle.span}><a href="javascript:void(0);" onClick={this.handleLike.bind(this)}>类别: {resource.categories}</a></span>
                <span style={footerStyle.span}><a href="javascript:void(0);" onClick={this.handleLike.bind(this)}>标签: {resource.tags}</a></span>
            </div>
        );
    }
}

Footer.contextTypes = {
    router: React.PropTypes.object
};

export default class Resource extends React.Component {
    openAccessDetail(event) {
        event.preventDefault();
        alert("openAccessDetail");
    }

    render() {
        const styles = {
            card: {
                marginTop: 10,
                marginLeft:5,
                marginRight:5,
                marginBottom:10,
                padding: 10
            },
            cardHeader: {
                title: {
                    fontSize: 20,
                    color: blue700,
                    textColor: blue700
                },
                subTitle: {
                    fontSize: 14
                }
            },
            cardTitle: {
                fontSize: 16
            },
            licenceKeyButton: {
                fontSize: 14
            }

        };
        const {resource} = this.props;
        return (
            <Row className="col-margin-clear">
                <Col xs={12} className="col-margin-clear">
                    <Paper style={styles.card} zDepth={1} rounded={false} >
                        <Title {...this.props}/>
                        <Content abstract={resource.abstractContent}/>
                        <Footer {...this.props}/>
                    </Paper>
                </Col>
            </Row>
        );
    }
}