import { ApiProperty } from '@nestjs/swagger';
import { Operator } from 'src/modules/operator/entities/operator.entity';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
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

  @OneToOne(() => Operator, (operator) => operator.user)
  @ApiProperty()
  @JoinColumn()
  operator: Operator;

  @CreateDateColumn()
  @ApiProperty()
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updated_at: Date;

}
