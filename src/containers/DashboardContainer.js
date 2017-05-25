/**
 * Created by zhaoyu on 17-3-2.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { statistic } from '../actions/statistics';
import Dashboard from "../components/Dashboard";

function mapStateToProps(state, newProps) {
    console.log(state);
    return {
        session: state.session,
        statisticState: state.statisticState
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({statistic}, dispatch)};
}

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;