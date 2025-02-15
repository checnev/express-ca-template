import { Router } from 'express';
import { userController } from '@/features/user/controller/user-controller';

export const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/:id', userController.getById);
