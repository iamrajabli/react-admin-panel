import HeadTag from "../../ui/HeadTag/HeadTag";

import styles from './Header.module.css';

import profile from '../../../assets/profile.jpg';
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Header = () => {

    const [visibility, setVisibility] = useState(false);

    return (
        <header className={styles.Header}>
            <HeadTag tag="h1">
                Digitip Admin
            </HeadTag>

            <div className={styles.Profile}>
                <Link to='/profile'>
                    Hikmat Rajabli
                </Link>
                <img
                    onClick={() => setVisibility(!visibility)}
                    src={profile} alt="profile" />

                <Dropdown visibility={visibility} />
            </div>
        </header>
    );
};

export default Header;