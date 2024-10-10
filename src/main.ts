import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'src/config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { serverConfig } = config;
  await app.listen(+serverConfig.port);
}
bootstrap();
