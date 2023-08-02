import sqlite3 from 'sqlite3';
const sqlite = sqlite3.verbose();

const db = new sqlite.Database('fs_dev_take_home.db', (err) => {
  if (err) console.error('Error connecting to database:', err.message);
  else console.log('Connected to the SQLite database.');
});

const getAccounts = async (manager) => {
  return new Promise(function(resolve, reject) {
    const queryString = 'SELECT * FROM account INNER JOIN account_recommendations ON account.account_id = account_recommendations.account_id WHERE account_manager = ? LIMIT 20';
    const queryData = [manager];
    db.all(queryString, queryData, function(err, rows) {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

export default {
  getAccounts
};