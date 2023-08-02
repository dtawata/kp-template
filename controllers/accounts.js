import db from '../lib/db.js';

const accounts = async (req, res) => {
  const { manager } = req.query;
  const accounts = await db.getAccounts(manager);
  console.log('accounts', accounts);
  res.send(accounts);
};

export default {
  accounts,
};
