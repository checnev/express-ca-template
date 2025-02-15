import type { UserModel } from '../entities/user/user.model';

export interface IUserRepository {
  getById(id: number): Promise<UserModel | null>;
  create(user: UserModel): Promise<UserModel>;
}
