/**
 * Created by zhaoyu on 17-1-23.
 */

import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likeTotalCount: 122
        };

        this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    handleLikeClick(e) {
        this.setState({likeTotalCount: this.state.likeTotalCount + 1});
        console.log(this.state.likeTotalCount);
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img width="600" height="400"
                         src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA2MDAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0yMjguMTg0LDE0My41djExM2gxNDMuNjMydi0xMTNIMjI4LjE4NHogTTM2MC4yNDQsMjQ0LjI0N0gyNDAuNDM3di04OC40OTRoMTE5LjgwOEwzNjAuMjQ0LDI0NC4yNDcNCgkJTDM2MC4yNDQsMjQ0LjI0N3oiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjI0Ni44ODEsMjM0LjcxNyAyNzEuNTcyLDIwOC43NjQgMjgwLjgyNCwyMTIuNzY4IDMxMC4wMTYsMTgxLjY4OCAzMjEuNTA1LDE5NS40MzQgDQoJCTMyNi42ODksMTkyLjMwMyAzNTQuNzQ2LDIzNC43MTcgCSIvPg0KCTxjaXJjbGUgZmlsbD0iI0Q4RDhEOCIgY3g9IjI3NS40MDUiIGN5PSIxNzguMjU3IiByPSIxMC43ODciLz4NCjwvZz4NCjwvc3ZnPg0K"
                         alt=""/>
                    <div className="caption">
                        <h3>湖北广水</h3>
                        <p>湖北广水湖北广水湖北广水湖北广水湖北广水湖北广水湖北广水湖北广水</p>
                        <p><a href="#" role="button">More</a></p>
                        <div className="text-left text-muted">
                            <ul className="list-inline">
                                <li><span className="glyphicon glyphicon-eye-open" ></span>&nbsp;<a href="" data-toggle="tooltip" data-placement="left" title="浏览量">3434</a></li>
                                <li><span className="glyphicon glyphicon-user"></span>&nbsp;1232324</li>
                                <li><a href="#" onClick={this.handleLikeClick} title="我喜欢"><span className="glyphicon glyphicon-thumbs-up"></span>&nbsp;{this.state.likeTotalCount}</a></li>
                                <li><a href="#"  title="点击分享"><span className="glyphicon glyphicon-share-alt"></span>&nbsp;分享</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}