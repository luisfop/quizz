import React,{ useContext} from 'react';
import styles from './Header.module.css';

import {QuizzContext} from '../../../context/QuizzContext';

const Header = () => {

    const [counter, setCounter] = useContext(QuizzContext);

    return(
        <div className={styles.header}>
            <div className={styles.items}>
                <p className={styles.item}>Question {counter} / 10</p>
                <p  className={styles.item}>Result: 2/10</p>
            </div>
            
        </div>
        
    )
}

export default Header;