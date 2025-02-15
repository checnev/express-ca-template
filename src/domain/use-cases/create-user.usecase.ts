import type { UserModel } from '../entities/user/user.model';
import type { IUserRepository } from '../repositories/i-user-repository';

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  execute(user: UserModel): Promise<UserModel> {
    return this.repository.create(user);
  }
}
