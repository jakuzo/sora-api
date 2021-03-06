import express from 'express';
import UserController from '../../controllers/v1/user';
import { checkToken } from '../../middlewares/v1/checkToken';
import { checkRole } from '../../middlewares/v1/checkRole';

const router = express.Router();

router.get('/', [checkToken, checkRole(['superadmin', 'admin'])], UserController.index);
router.get('/:id', [checkToken, checkRole(['superadmin', 'admin'])], UserController.show);

router.put('/:id', [checkToken, checkRole(['superadmin'])], UserController.update);
router.delete('/:id', [checkToken, checkRole(['superadmin'])], UserController.destroy);

export default router;
