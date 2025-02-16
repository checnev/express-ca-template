import { UserDataSource } from '@/data/dataSource/user.datasource';
import { UserRepository } from '@/data/repositories/user.repository';
import { CreateUserUseCase } from '@/domain/use-cases/create-user.usecase';
import { GetUserByIdUseCase } from '@/domain/use-cases/get-user-by-id.usecase';
import { AppDataSource } from '@/infrastructure/typeorm/database';

const userRepository = new UserRepository(new UserDataSource(AppDataSource));
export const createUserUseCase = new CreateUserUseCase(userRepository);
export const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
