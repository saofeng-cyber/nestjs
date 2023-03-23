import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Router {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  routeId: number;
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  path: string;
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  redirect: string;
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  component: string;
  @Column()
  @Generated('uuid')
  uuid: string;
  @Column({
    type: 'enum',
    enum: ['PUBLIC', 'PRIVATE'],
    default: 'PUBLIC',
  })
  enum: string;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
