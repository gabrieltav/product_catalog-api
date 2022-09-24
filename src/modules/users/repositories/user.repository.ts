import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { IUserRepository } from '../interfaces/IUserRepository';

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements IUserRepository {
}
