import { Cashin, getSolds, Cashout } from '../controllers/valuesController.js';
import { Router } from 'express';

const router = Router();

router.post('/Cashin', Cashin);
router.get('/Cashin', getSolds);
router.post('/Cashout', Cashout);

export default router;
