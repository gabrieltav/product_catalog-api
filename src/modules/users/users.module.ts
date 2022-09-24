import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { IUserService } from './interfaces/IUserService';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository]),
  ],
  controllers: [UsersController],
  providers: [{ provide: IUserService, useClass: UsersService }],
  exports: [{ provide: IUserService, useClass: UsersService }],
})
export class UsersModule { }
