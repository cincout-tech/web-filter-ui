/**
 * Created by zhaoyu on 17-1-20.
 */
import React from 'react';

export default class NavDivider extends React.Component {
    render() {
        const  { dividerName, moreLink } = this.props;
        return (
            <div className="row divider-container">
                <div className="col-sm-12">
                    <div className="btn-group btn-group-sm">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                            <span className="glyphicon glyphicon-th"></span>&nbsp;{this.props.dividerName} <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href={this.props.moreLink}>More</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}