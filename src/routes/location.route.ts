/*
https://docs.nestjs.com/modules
*/

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from 'src/controllers/location.controller';
import { LocationEntity } from 'src/entities/location.entity';
import { AuthenticateMiddleware } from 'src/middlewares/authenticate.middleware';
import { AuthorizeMiddleware } from 'src/middlewares/authorize.middleware';
import { InterceptMiddleware } from 'src/middlewares/intercept.middleware';
import { LocationModel } from 'src/models/location.model';
import { LocationService } from 'src/services/location.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  controllers: [LocationController],
  providers: [LocationService, LocationModel]
})
export class LocationRoute implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticateMiddleware, AuthorizeMiddleware, InterceptMiddleware).forRoutes(LocationController);
  }
}
