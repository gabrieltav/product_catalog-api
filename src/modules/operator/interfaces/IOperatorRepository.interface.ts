import { Repository } from 'typeorm';
import { Operator } from '../entities/operator.entity';

export interface IOperatorRepository extends Repository<Operator> {
    getAllOperator():Promise<Object[]>
}
