import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { ROLE } from './role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Informe seu nome.',
  })
  name: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Informe um endereço de E-mail.',
  })
  @IsEmail(
    {},
    {
      message: 'Insira um e-mail válido.',
    },
  )
  email: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Informe seu telefone.',
  })
  phone: string;

  @IsNotEmpty({
    message: 'Informe a role',
  })
  @IsEnum(ROLE)
  role: ROLE;

  @IsNotEmpty({
    message: 'Informe sua data de nascimento',
  })
  birth_date: Date;

  @IsNotEmpty({
    message: 'Informe sua senha.',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  })
  password: string;

  @IsNotEmpty({
    message: 'Informe a confirmação de senha.',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  })
  passwordConfirmation: string;
}
