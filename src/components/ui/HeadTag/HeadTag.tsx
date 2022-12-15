import { IHeadTag } from './HeadTag.props';

import styles from './HeadTag.module.css';

const HeadTag = ({ tag, children }: IHeadTag): JSX.Element => {

    const Tag = tag;

    return (
        <Tag className={styles[tag]}>
            {children}
        </Tag>
    )
};

export default HeadTag;