import { UpdateOperatorDto } from '../dto/update-operator.dto';
import { Operator } from '../entities/operator.entity';
import { User } from '../../users/entities/user.entity';

export abstract class IOperatorService {
  abstract createOperator(): Promise<Operator>;
  abstract updateOperator(
    updateOperatorDto: UpdateOperatorDto,
    user: User
  ): Promise<User>
  abstract listAll(): Promise<User[] | Object[] | undefined>;
  abstract findOne(search: string): Promise<User | User[] | undefined>;
}
