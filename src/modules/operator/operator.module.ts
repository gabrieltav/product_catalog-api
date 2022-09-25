import { UserRepository } from '../users/repositories/user.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatorController } from './operator.controller';
import { OperatorService } from './operator.service';
import { IOperatorService } from './interfaces/IOperatorService.interface';
import { OperatorRepository } from './repositories/operator.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      OperatorRepository,
      UserRepository,
    ]),
  ],
  controllers: [OperatorController],
  providers: [{ provide: IOperatorService, useClass: OperatorService }],
  exports: [{ provide: IOperatorService, useClass: OperatorService }],
})
export class OperatorModule { }
