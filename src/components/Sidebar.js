import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.priority}>
        <h3>Priority <span className={styles.priority_num}>8</span></h3>
        <div className={styles.priority_acc}>priority acc #1</div>
        <div className={styles.priority_acc}>priority acc #1</div>
        <div className={styles.priority_acc}>priority acc #1</div>
        <div className={styles.priority_acc}>priority acc #1</div>
        <div className={styles.priority_acc}>priority acc #1</div>
      </div>

      <div className={styles.familiarize}>
        <h3>Familiarize <span className={styles.priority_num}>8</span></h3>
        <div className={styles.familiarize_acc}>priority acc #1</div>
        <div className={styles.familiarize_acc}>priority acc #1</div>
        <div className={styles.familiarize_acc}>priority acc #1</div>
        <div className={styles.familiarize_acc}>priority acc #1</div>
        <div className={styles.familiarize_acc}>priority acc #1</div>
      </div>


    </div>
  );
};

export default Sidebar;