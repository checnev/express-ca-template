import type { UserDbDTO } from '../dto/user-db.dto';

export interface IUserDataSource {
  create(user: UserDbDTO): Promise<UserDbDTO>;
  getById(id: number): Promise<UserDbDTO>;
}
