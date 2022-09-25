import { UpdateOperatorDto } from './dto/update-operator.dto';
import { HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { IOperatorRepository } from './interfaces/IOperatorRepository.interface';
import { OperatorRepository } from './repositories/operator.repository';
import { UserRepository } from '../users/repositories/user.repository';
import { Operator } from './entities/operator.entity';
import { IOperatorService } from './interfaces/IOperatorService.interface';

@Injectable()
export class OperatorService implements IOperatorService {
  constructor(
    @InjectRepository(OperatorRepository)
    private readonly operatorRepository: IOperatorRepository,
    @InjectRepository(UserRepository)
    private readonly usersRepository: UserRepository,
  ) { }

  async updateOperator(
    updateOperatorDto: UpdateOperatorDto,
    user: User
  ): Promise<User> {
    const {email, phone, name, birth_date } = updateOperatorDto;
    const operator = user.operator
    user.email = email ?? user.email;
    user.phone = phone ?? user.phone;
    user.name = name ?? user.name;
    user.birth_date = birth_date ?? user.birth_date;

    await operator.save()
    try {
      await user.save()
      return user;
    } catch (error) {
      
        throw new InternalServerErrorException('Falha ao atualizar dados do operador')
     
    }
  }

  async createOperator(): Promise<Operator> {
    const operator = this.operatorRepository.create();

    await operator.save();

    return operator;
  }

  async listAll(): Promise<User[] | Object[] | undefined> {
    return await this.usersRepository.getAllOperator()
  }

  async findOne(search: string): Promise<User | User[] | undefined> {
    const operator = await this.usersRepository.find({ where: { name: search, role: "ROLE_OPERATOR" } });

    if (operator.length <= 0) {
      const operator = await this.usersRepository.findOne({ where: { id: search, role: "ROLE_OPERATOR" } });
      if (!operator) throw new HttpException("operator not found!", 400);
      return operator;
    }
    if (operator.length === 1) return operator[0];
    return operator;
  }

}
