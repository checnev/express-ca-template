import { Router } from 'express';
import { UserController } from '@/features/user/controller/user.controller';
import { createUserUseCase, getUserByIdUseCase } from '@/app/providers/di';

export const userRouter = Router();

const controller = new UserController(createUserUseCase, getUserByIdUseCase);

userRouter.post('/', controller.create);
userRouter.get('/:id', controller.getById);
