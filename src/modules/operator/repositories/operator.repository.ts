import { EntityRepository, Repository } from 'typeorm';
import { Operator } from '../entities/operator.entity';
import { IOperatorRepository } from '../interfaces/IOperatorRepository.interface';

@EntityRepository(Operator)
export class OperatorRepository extends Repository<Operator> implements IOperatorRepository{

    async getAllOperator(): Promise<Object[]> {
        const operators = await this.createQueryBuilder('users')
            .where({ role: 'ROLE_OPERATOR' })
            .orderBy({
                'users.name':'ASC'
            })
            .getMany()
        return operators  
    }

}
