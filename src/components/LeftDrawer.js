/**
 * Created by zhaoyu on 17-3-2.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, lightGreen200, green300} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';

const LeftDrawer = (props) => {
    let { navDrawerOpen } = props;

    const styles = {
        menuItem: {
            color: white,
            fontSize: 14
        },
        logo: {
            cursor: 'pointer',
            fontSize: 20,
            color: typography.textFullWhite,
            lineHeight: `${spacing.desktopKeylineIncrement}px`,
            fontWeight: typography.fontWeightLight,
            backgroundColor: lightGreen200,
            paddingLeft: 15,
            paddingTop:10
        },
        avatar: {
            div: {
                padding: 0,
                height: 64,
                backgroundColor: lightGreen200
            },
            icon: {
                float: 'left',
                display: 'block',
                margin: '12px auto',
                marginLeft: 20
            },
            span: {
                display: 'block',
                color: 'white',
                fontWeight: 400,
                float: 'left',
                fontSize:18,
                paddingTop:20,
                paddingBottom:20,
                paddingLeft: 20,
                textShadow: '1px 1px #444'
            }
        }
    };

    var menuListArr = [];
    props.menus.map(function(menu, index) {
        if (menu.submenu == null) {
            menuListArr.push(<ListItem
                key={menu.text + index}
                primaryText={menu.text}
                leftIcon={menu.icon}
                containerElement={<Link to={menu.link}/>}
            />);
        } else {
            var nestedItems = [];
            menu.submenu.map((menu, index) => {
                nestedItems.push(
                    <ListItem
                        key={menu.text + index}
                        primaryText={menu.text}
                        leftIcon={menu.icon}
                        containerElement={<Link to={menu.link}/>}
                    />
                );
            });

            menuListArr.push(<ListItem
                key={menu.text + index}
                initiallyOpen={true}
                primaryTogglesNestedList={true}
                primaryText={menu.text}
                leftIcon={menu.icon}
                nestedItems={nestedItems}
            />)
        }
    })

    return (
        <Drawer width={230} docked={true} open={navDrawerOpen}>
            <div style={styles.avatar.div}>
                <Avatar src="style/images/default_user.png" size={40} style={styles.avatar.icon}/>
                <span style={styles.avatar.span}>{props.name}</span>
            </div>
            <div>
                <List>
                    {menuListArr}
                </List>

            </div>
        </Drawer>
    );
};

LeftDrawer.propTypes = {
    navDrawerOpen: PropTypes.bool,
    menus: PropTypes.array,
    name: PropTypes.string,
};

export default LeftDrawer;
