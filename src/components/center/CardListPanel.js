/**
 * Created by zhaoyu on 17-1-23.
 */

import React from 'react';

import Card from './Card';
import NavDivider from './NavDivider';

export class CardList extends React.Component {
    render() {
        return (
            <div className="row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default class CardListPanel extends React.Component {
    render() {
        const {dividerName, moreLink} = this.props;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <NavDivider dividerName={dividerName} moreLink={moreLink}/>
                    <hr/>
                    <CardList/>
                </div>
            </div>
        );
    }
}