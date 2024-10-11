import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'src/config/config';
import { ResponseInterceptor } from './interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { serverConfig } = config;
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(+serverConfig.port);
}
bootstrap();
