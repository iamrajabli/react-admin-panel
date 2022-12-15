import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

import { ILayout } from './Layout.props';

import styles from './Layout.module.css';

const Layout = ({ children }: ILayout): JSX.Element => {
    return (
        <div className={styles.Layout}>
            <Sidebar />
            <div className={styles.Main}>
                <Header />
                {children}
            </div>
        </div>
    );
};

export default Layout;