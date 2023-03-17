import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
const config = {
  provide: 'config',
  useClass: ConfigService,
};
@Global()
@Module({
  controllers: [ConfigController],
  providers: [config],
  exports: [config],
})
export class ConfigModule {}
