import { IMenu } from "./Menu.props";

import styles from './Menu.module.css';
import { NavLink } from "react-router-dom";
import { CSSProperties } from "react";

const MenuItem = ({ title, path, icon }: IMenu): JSX.Element => {

    return (
        <li className={styles.MenuItem}>
            <NavLink className={({ isActive }) => (
                isActive ? styles.MenuActive : undefined
            )} to={path}>
                {icon()}
                {title}
            </NavLink>
        </li>
    );
};

export default MenuItem;