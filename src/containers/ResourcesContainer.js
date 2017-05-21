/**
 * Created by zhaoyu on 17-5-15.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResourcePanel from '../components/index/ResourcePanel';
import { search } from '../actions/searchs';

function mapStateToProps(state, newProps) {
    console.log(state);
    return {
        searchState: state.searchState,
        session: state.session
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({search}, dispatch)};
}

const ResourcesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourcePanel);

export default ResourcesContainer;
