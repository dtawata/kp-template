import styles from './App.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar.js';
import Header from './Header.js';
import axios from 'axios';

const App = (props) => {

  const [manager, setManager] = useState(prompt('Account Manager'));
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get('/api/accounts', {
      params: {
        manager
      }
    }).then((res) => {
      console.log('res', res);
      setAccounts(res.data);
    })
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.flex}>
        <Sidebar />
        <div className={styles.main}>
          <div className={styles.account}>
            <div className={styles.banner}>{manager} Account is ready for the next stage: Engage</div>
            <div className={styles.account_top}>
              <div className={styles.account_name}>Account Name <span className={styles.account_num}>0873230</span></div>
              <div className={styles.stage}>
                <div className={styles.current_stage}>Familiarize</div>
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                <div className={styles.predicted_stage}>Engage</div>
              </div>
            </div>
            <div className={styles.account_mid}>
              <div className={styles.account_mid_left}>
                <h3>Account Information</h3>
                <div className={styles.data}>Account Manager: John Smith</div>
                <div className={styles.data}>Date: 07/23</div>
                <div className={styles.data}>Current Account Stage: Familiarize</div>
                <div className={styles.data}>ZIP Code: 91431</div>
                <div className={styles.data}>Number of Employees: 872</div>
                <div className={styles.data}>Competitors:</div>
              </div>
              <div className={styles.account_mid_right}>
                <h3>PAM Recommendation</h3>
                <div className={styles.data}>Recommended Account Stage: Engage</div>
                <div className={styles.data}>Recommendation Date: 08/01/23</div>
                <div className={styles.data}>Date: 07/23</div>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.contact_left}>
              <h3 className={styles.title}>Point of Contact</h3>
              <div className={styles.contact_info}>
                <FontAwesomeIcon icon={faUser} className={styles.user_icon} />
                <div>
                  <div className={styles.user_name}>John Doe</div>
                  <div className={styles.user_info}>Role: Manager</div>
                  <div className={styles.user_info}>Phone #: 213-786-3196</div>
                  <div className={styles.user_info}>Email: doe.john@gmail.com</div>
                </div>
              </div>
            </div>
            <div className={styles.contact_right}>
              <div className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;