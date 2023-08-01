import styles from './App.module.css';
import React from 'react';

const App = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>sidebar</div>
      <div className={styles.main}>
        <div className={styles.filters}>filter</div>
        <div className={styles.account}>
          <div className={styles.account_top}>
            <div className={styles.account_name}>Account Name</div>
            <div className={styles.stage}>
              <div className={styles.current_stage}>Familiarize</div>
              <div className={styles.predicted_stage}>Engage</div>
            </div>
          </div>
        </div>
        <div className={styles.section_bot}>
          <div>Point of Contact</div>
        </div>
      </div>
    </div>
  );
};

export default App;