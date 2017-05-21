import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Settings from 'material-ui/svg-icons/action/settings';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
    menus: [
        {
            text: '仪表盘',
            icon: <Assessment/>,
            link: '/dashboard'
        },
        {text: '添加资源', icon: <GridOn/>, link: '/resource'}
        /*{
            text: '个人信息',
            icon: <PermIdentity/>,
            link: '/info'
            /!*submenu: [
                {
                    text: '个人信息',
                    icon: <PermIdentity/>,
                    link: '/info'
                },
                {
                    text: '个人信息',
                    icon: <PermIdentity/>,
                    link: '/info'
                }
            ]*!/
        },
        {text: '系统设置', icon: <Settings/>, link: '/settings'}*/
    ]
};

export default data;
