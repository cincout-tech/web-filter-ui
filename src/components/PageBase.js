/**
 * Created by zhaoyu on 17-3-2.
 */
import React from 'react';
import { Paper, Divider } from 'material-ui';

export default class PageBase extends React.Component {
    render() {
        const styles = {
            paper: {
                marginBottom:20
            }
        };
        return (
            <div>
                <Paper rounded={true} style={styles.paper}>
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}