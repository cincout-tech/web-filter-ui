/**
 * Created by zhaoyu on 17-5-20.
 */

import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid';
import Header from "../header/Header";
import SearchForm from "./SearchForm";

export default class SearchFormPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const  styles = {
            searchContainer: {
                marginTop: '6%'
            },

            logo: {
                marginBottom: 20
            },
            image: {
                width: 'auto',
                height: 100
            },
            searchBtn: {
                marginTop:20
            }
        };
        const {session} = this.props;

        return (
            <Grid fluid className="grid-margin-clear">
                <Header session={session}/>
                <SearchForm {...this.props}/>
            </Grid>
        );
    }
}