import { Router } from 'express'
import { UserController } from './Controller/UserController'
import { AuthController } from './Controller/AuthController';
import { AuthMiddlwares } from './middlewares/auth';

const usercontroller = new UserController();
const authenticate = new AuthController();

export const router = Router()

router.post('/create', usercontroller.store);
router.get('/users', AuthMiddlwares, usercontroller.index);
router.post('/auth', authenticate.authenticate);