import React from 'react';
import Logo_url from '../images/logo.png'
import { Header } from 'antd/es/layout/layout';
import style from '../styles/header.module.scss';

const HeaderComponent = () => {
    return <Header className={style.header}>
        <div className={style.logo_container}>
            <img src={Logo_url} alt="logo" className='logo' />
        </div>
    </Header>
}

export default HeaderComponent;