import express from 'express';
import controller from '../controllers/accounts.js';
const router = express.Router();

router.get('/', controller.accounts);

export default router;