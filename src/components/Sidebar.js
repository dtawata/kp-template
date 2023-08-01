import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.priority}>
        <h3 className={styles.priority_title}>
          <div>Priority</div>
          <div className={styles.priority_num}>5</div>
        </h3>
        <div className={styles.priority_acc}>Priority Acc #1</div>
        <div className={styles.priority_acc}>Priority Acc #1</div>
        <div className={styles.priority_acc}>Priority Acc #1</div>
        <div className={styles.priority_acc}>Priority Acc #1</div>
        <div className={styles.priority_acc}>Priority Acc #1</div>
      </div>

      <div className={styles.priority}>
        <h3 className={styles.priority_title}>
          <div>Initiate</div>
          <div className={styles.priority_num}>3</div>
        </h3>
        <div className={styles.priority_acc}>Intiate Acc #1</div>
        <div className={styles.priority_acc}>Intiate Acc #2</div>
        <div className={styles.priority_acc}>Intiate Acc #3</div>
      </div>

      <div className={styles.priority}>
        <h3 className={styles.priority_title}>
          <div>Engage</div>
          <div className={styles.priority_num}>10</div>
        </h3>
      </div>

      <div className={styles.priority}>
        <h3 className={styles.priority_title}>
          <div>Familiarize</div>
          <div className={styles.priority_num}>8</div>
        </h3>
      </div>


    </div>
  );
};

export default Sidebar;