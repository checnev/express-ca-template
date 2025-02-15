import { UserModel } from '@/domain/entities/user/user.model';
import type { IUserDataSource } from './i-user-datasource';
import type { IUserRepository } from '@/domain/repositories/i-user-repository';

export class UserRepository implements IUserRepository {
  constructor(private dataSource: IUserDataSource) {}

  async getById(id: number): Promise<UserModel | null> {
    const user = await this.dataSource.getById(id);
    return user ? new UserModel(user.id, user.firstName, user.lastName, user.username) : null;
  }

  async create(user: UserModel): Promise<UserModel> {
    const newUser = await this.dataSource.create({
      id: null,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    });

    return newUser;
  }
}
