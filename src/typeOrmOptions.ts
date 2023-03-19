import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormoptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1314521sun',
  database: 'my-admin',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  retryDelay: 3000,
  retryAttempts: 5,
  autoLoadEntities: true,
};
