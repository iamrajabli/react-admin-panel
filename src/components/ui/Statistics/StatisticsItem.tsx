import { IStatistics } from "./Statistics.props";

import styles from './Statistics.module.css';

const StatisticsItem = ({ title, result }: IStatistics) => {
    return (
        <div className={styles.StatisticsItem}>
            <h1>{title}</h1>
            <p>{result}</p>
        </div>
    );
};

export default StatisticsItem;