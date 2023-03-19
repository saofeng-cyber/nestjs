import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Login {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键',
  })
  id: number;
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  username: string;
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  password: string;
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  token: string;
  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_time',
    comment: '创建时间',
  })
  creatTime: Date;
}
