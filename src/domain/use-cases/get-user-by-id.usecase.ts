import type { UserModel } from '../entities/user/user.model';
import type { IUserRepository } from '../repositories/i-user-repository';

export class GetUserByIdUseCase {
  constructor(private repository: IUserRepository) {}

  execute(id: number): Promise<UserModel | null> {
    return this.repository.getById(id);
  }
}
