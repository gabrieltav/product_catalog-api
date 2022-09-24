import {
  Injectable,
} from '@nestjs/common';
import { IUserService } from './interfaces/IUserService';

@Injectable()
export class UsersService implements IUserService {
}
