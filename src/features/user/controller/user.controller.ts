import type { Request, Response } from 'express';
import { UserHttpDtoMapper } from '../utils/user-http-dto.mapper';
import { CreateUserUseCase } from '@/domain/use-cases/create-user.usecase';
import { GetUserByIdUseCase } from '@/domain/use-cases/get-user-by-id.usecase';
import type { UserHttpDTO } from '../dto/user-http.dto';
import { UserRepository } from '@/data/repositories/user.repository';
import { UserDataSource } from '@/data/dataSource/user.datasource';
import { AppDataSource } from '@/infrastructure/typeorm/database';

class UserController {
  private repository = new UserRepository(new UserDataSource(AppDataSource));

  create = async (req: Request<unknown, unknown, UserHttpDTO>, res: Response) => {
    const model = UserHttpDtoMapper.toModel(req.body);
    const useCase = new CreateUserUseCase(this.repository);
    const newUser = await useCase.execute(model);
    res.json(newUser);
  };

  getById = async (req: Request<{ id: number }>, res: Response) => {
    const useCase = new GetUserByIdUseCase(this.repository);
    const newUser = await useCase.execute(req.params.id);
    res.json(newUser);
  };
}

export const userController = new UserController();
