/**
 * Created by zhaoyu on 17-1-23.
 */

import React from 'react';

export default class PoetryCard extends React.Component {
    render() {
        return (
            <div className="row ">
                <div className="col-xs-12 col-md-12">
                    <div className="jumbotron">
                        <h1>天净沙&nbsp;&bull;&nbsp;秋思</h1>
                        <blockquote>
                            <p>枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。</p>
                            <footer>马致远 <cite title="Source Title">《天净沙&nbsp;&bull;&nbsp;秋思》</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}