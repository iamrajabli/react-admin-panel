import React from "react";
import Menu from "./menu/Menu";

import styles from './Sidebar.module.css';

import logo from '../../../assets/logo.png';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.Sidebar}>
            <img src={logo} alt="" />
            <Menu />
        </div>
    );
};

export default Sidebar;