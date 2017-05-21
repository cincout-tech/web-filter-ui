/**
 * Created by zhaoyu on 17-5-4.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { search } from '../actions/searchs';
import SearchFormPanel from "../components/search/SearchFormPanel";

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

const SearchHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFormPanel);

export default SearchHome;
