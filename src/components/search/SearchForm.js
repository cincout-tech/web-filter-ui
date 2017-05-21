/**
 * Created by zhaoyu on 17-5-4.
 */

import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {green200, white} from 'material-ui/styles/colors';

import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: "",
            page: 0,
            size: 10,
            sort: "createTime",
            order: "ASC"
        };
    }

    componentWillMount() {
        console.log("SearchForm componentWillMount...");
    }

    componentWillReceiveProps(newProps) {
        const {searchState} = newProps;
        console.log("SearchForm componentWillReceiveProps");
        if (searchState.isSearched) {
            this.context.router.push("/resources");
        } else {
            console.log("not login");
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const {actions} = this.props;
        var queryData = {...this.state};
        if (queryData.keywords.length < 1) {
            return;
        }
        actions.search(queryData);
    }

    handleKeywordChange(event) {
        this.setState({
            keywords: event.target.value
        });
    }

    render() {
        const {searchState, session, actions} = this.props;

        const styles = {
            searchContainer: {
                marginTop: '4%'
            },

            logo: {
                marginBottom: 20
            },
            image: {
                width: 'auto',
                height: 100
            },
            searchBtn: {
                marginTop: 20
            }
        };

        return (
            <Row style={styles.searchContainer}>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row center="xs">
                        <Col xs={12} sm={8} md={6} lg={3}>
                            <div style={styles.logo}>
                                <Link to="/"><img src="style/images/logo_with_cincout_small.png" style={styles.image}/></Link>
                            </div>
                            <div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <TextField
                                        hintText="关键词 ..."
                                        fullWidth={true}
                                        value={this.state.keywords}
                                        onChange={this.handleKeywordChange.bind(this)}
                                    />
                                    <div>
                                        <RaisedButton type="submit" label="搜 索"
                                                      backgroundColor={green200}
                                                      labelColor={white}
                                                      style={styles.searchBtn}/>

                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

SearchForm.contextTypes = {
    router: React.PropTypes.object
};