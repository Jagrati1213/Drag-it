import React, { useState } from 'react';
import { MenuJson } from '../utils/Menu';
import { Layout, Menu } from 'antd';
import style from '../styles/sider.module.scss'

const { Sider } = Layout;

const SiderComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className={style.sider}>
            {!collapsed ? <h2>Drag-It</h2> : <h2>DI</h2>}
            <div className="demo-logo-vertical" />
            <Menu theme="light" defaultSelectedKeys={['2']} mode="inline" items={MenuJson} />
        </Sider>
    )
}

export default SiderComponent