/**
 * Created by zhaoyu on 17-3-17.
 */

import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

class InfoBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {color, title, value, Icon} = this.props;
        const styles = {
            paper: {
                marginBottom: '10px'
            },
            content: {
                padding: '5px 10px',
                marginLeft: 90,
                height: 90
            },
            iconSpan: {
                float: 'left',
                height:100,
                width: 90,
                textAlign: 'center',
                backgroundColor: color
            },
            number: {
                display: 'block',
                fontWeight: typography.fontWeightMedium,
                fontSize: 18,
                color: grey800
            },
            text: {
                fontSize: 20,
                fontWeight: typography.fontWeightLight,
                color: grey800
            },

            icon: {
                height: 50,
                width: 50,
                marginTop: 20,
                maxWidth: '100%'

            }
        };

        return (
            <Paper style={styles.paper}>
                <span style={styles.iconSpan}>
                    <Icon color={white}
                          style={styles.icon}
                    />
                </span>

                <div style={styles.content}>
                    <span style={styles.text}>{title}</span>
                    <span style={styles.number}>{value}</span>
                </div>
            </Paper>
        );
    }
}

InfoBox.propTypes = {
    Icon: PropTypes.any,
    color: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.number
};

export default InfoBox;