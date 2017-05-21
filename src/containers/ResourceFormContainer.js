/**
 * Created by zhaoyu on 17-5-9.
 */



import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddResourceForm from "../components/index/AddResourceForm";
import { postResource } from '../actions/resources';

function mapStateToProps(state, newProps) {
    console.log(state);
    return {
        resourcePostState: state.resourcePostState,
        session: state.session
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({postResource}, dispatch)};
}

const ResourceFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddResourceForm);

export default ResourceFormContainer;