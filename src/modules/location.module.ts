/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from 'src/controllers/location.controller';
import { LocationEntity } from 'src/entities/location.entity';
import { LocationService } from 'src/services/location.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LocationEntity])
  ],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
