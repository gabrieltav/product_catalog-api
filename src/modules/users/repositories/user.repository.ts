import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { IUserRepository } from '../interfaces/IUserRepository';

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements IUserRepository {

      async getAllOperator(): Promise<User[]> {
      const operators = await this.createQueryBuilder('users')
          .where({ role: 'ROLE_OPERATOR' })
          .orderBy({
              'users.name':'ASC'
          })
          .getMany()
      return operators  
  }
}
