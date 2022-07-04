import { Cashin, getSolds, Cashout } from '../controllers/valuesController.js';
import { Router } from 'express';
import validateUser from '../middlewares/validateusers.js';

const router = Router();

router.post('/Cashin', validateUser, Cashin);
router.get('/Cashin', validateUser, getSolds);
router.post('/Cashout', validateUser, Cashout);

export default router;
