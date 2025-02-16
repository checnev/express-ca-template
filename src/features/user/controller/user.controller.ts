import type { Request, Response } from 'express';
import { UserHttpDtoMapper } from '../utils/user-http-dto.mapper';
import type { CreateUserUseCase } from '@/domain/use-cases/create-user.usecase';
import type { GetUserByIdUseCase } from '@/domain/use-cases/get-user-by-id.usecase';
import type { UserHttpDTO } from '../dto/user-http.dto';

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getUserByIdUseCase: GetUserByIdUseCase
  ) {}

  create = async (req: Request<unknown, unknown, UserHttpDTO>, res: Response) => {
    const model = UserHttpDtoMapper.toModel(req.body);
    const newUser = await this.createUserUseCase.execute(model);
    res.json(newUser);
  };

  getById = async (req: Request<{ id: number }>, res: Response) => {
    const user = await this.getUserByIdUseCase.execute(req.params.id);
    res.json(user);
  };
}
