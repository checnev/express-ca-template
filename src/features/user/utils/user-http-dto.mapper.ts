import { UserModel } from '@/domain/entities/user/user.model';
import { UserHttpDTO } from '../dto/user-http.dto';

export class UserHttpDtoMapper {
  static toModel(dto: UserHttpDTO): UserModel {
    return new UserModel(dto.id, dto.firstName, dto.lastName, dto.username);
  }

  static toDTO(model: UserModel): UserHttpDTO {
    return new UserHttpDTO(model.id, model.firstName, model.lastName, model.username);
  }
}
