import type { DataSource, Repository } from 'typeorm';
import { UserStorageElement } from '@/infrastructure/typeorm/models/user-storage-element';
import type { IUserDataSource } from '../repositories/i-user-datasource';
import { UserDbDTO } from '../dto/user-db.dto';

/**
 * These are intentional, incomplete boundaries, added for ease of testing.
 * The layer is optional, and you can work with the data directly through the repositories.
 */
export class UserDataSource implements IUserDataSource {
  private userORM: Repository<UserStorageElement>;

  constructor(db: DataSource) {
    this.userORM = db.getRepository(UserStorageElement);
  }

  async create(user: UserDbDTO): Promise<UserDbDTO> {
    const model = this.userORM.create({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    });
    const newUser = await this.userORM.save(model);
    return new UserDbDTO(newUser.id, newUser.firstName, newUser.lastName, newUser.username);
  }

  async getById(id: number): Promise<UserDbDTO | null> {
    const user = await this.userORM.findOneBy({ id });
    if (user) {
      return new UserDbDTO(user.id, user.firstName, user.lastName, user.username);
    }

    return null;
  }
}
