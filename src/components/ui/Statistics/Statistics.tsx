import { statistics } from "../../../constants/statistics";
import { IStatistics } from "./Statistics.props";
import StatisticsItem from "./StatisticsItem";

import styles from './Statistics.module.css';

const Statistics = () => {
    return (
        <div className={styles.Statistics}>
            {statistics.map((item: IStatistics, i: number) => (
                <StatisticsItem
                    key={i}
                    {...item}
                />
            ))}
        </div>
    );
};

export default Statistics;