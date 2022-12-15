import { Link } from 'react-router-dom';
import { IDropdown } from './Dropdown.props';

import styles from './Dropdown.module.css';

const Dropdown = ({ visibility }: IDropdown) => {

    return (
        <div style={{ display: visibility ? 'block' : 'none' }} className={styles.Dropdown}>
            <ul>
                <li>
                    <Link to='/profile'>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to='/Settings'>
                        Settings
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;