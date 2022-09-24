import { ApiProperty } from '@nestjs/swagger';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  @ApiProperty()
  name: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 200,
    unique: true,
  })
  @ApiProperty()
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  @ApiProperty()
  role: string;

  @Column({ nullable: true, type: 'varchar', length: 15, unique: true })
  @ApiProperty()
  phone: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  @ApiProperty()
  password: string;

  @ApiProperty()
  @Column({ nullable: true, type: 'date' })
  @ApiProperty()
  birth_date: Date;

  @CreateDateColumn()
  @ApiProperty()
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updated_at: Date;

}
