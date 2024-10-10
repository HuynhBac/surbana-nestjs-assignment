import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'src/config/config';

export const PostgreDBProvider = TypeOrmModule.forRoot({
  ...config.postgreDBConfig,
  type: 'postgres',
  port: +config.postgreDBConfig.port,
  entities: ["dist/**/*.entity.js"],
  autoLoadEntities: true
});
