import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.items}>
                <p className={styles.item}>Question 0/10</p>
                <p  className={styles.item}>Result: 2/10</p>
            </div>
            
        </div>
        
    )
}

export default Header;