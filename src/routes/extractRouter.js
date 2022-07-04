import { Cashin, getSolds, Cashout, Delete } from '../controllers/valuesController.js';
import { Router } from 'express';
import validateUser from '../middlewares/validateusers.js';

const router = Router();

router.post('/Cashin', validateUser, Cashin);
router.get('/Cashin', validateUser, getSolds);
router.post('/Cashout', validateUser, Cashout);
router.post('/Delete/:id', validateUser, Delete);

export default router;
