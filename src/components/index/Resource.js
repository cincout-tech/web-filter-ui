/**
 * Created by zhaoyu on 17-5-4.
 */

import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import {blueGrey800, blue700, blueA400, lightGreenA700, lightBlack} from 'material-ui/styles/colors';
import moment from 'moment';

const Title = (props) => {
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

    return (
        <div>
            <div style={cardHeader.title}>
                <a href={props.link} style={{color:blueA400}} target="_blank">{props.title}</a>
            </div>
            <div style={cardHeader.subTitle}>
                <span style={{color: lightBlack}}>{props.link}</span>
            </div>
        </div>
    );
};

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

    handleLike(event) {
        event.preventDefault();
        alert("like");
    }

    render() {
        const {date, view, like, categories, tags} = this.props;
        const footerStyle = {
            container: {

            },
            span: {
                marginRight: 8
            }
        };

        return (
            <div>
                <span style={footerStyle.span}>{moment(date).format('YYYY-MM-DD').toString()}</span>
                <span style={footerStyle.span}>浏览: {view}</span>
                <span style={footerStyle.span}><a href="javascript:void(0);" onClick={this.handleLike.bind(this)}>喜欢: {like}</a></span>
                <span style={footerStyle.span}><a href="javascript:void(0);" onClick={this.handleLike.bind(this)}>类别: {categories}</a></span>
                <span style={footerStyle.span}><a href="javascript:void(0);" onClick={this.handleLike.bind(this)}>标签: {tags}</a></span>
            </div>
        );
    }
}

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
        const {details} = this.props;
        return (
            <Row className="col-margin-clear">
                <Col xs={12} className="col-margin-clear">
                    <Paper style={styles.card} zDepth={1} rounded={false} >
                        <Title title={details.title} link={details.link}/>
                        <Content abstract={details.abstractContent}/>
                        <Footer date={details.createTime} like={details.likeCount} view={details.view} categories={details.categories} tags={details.tags}/>
                    </Paper>
                </Col>
            </Row>
        );
    }
}