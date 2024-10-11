/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { LocationRoute } from './location.route';

@Module({
  imports: [LocationRoute],
  controllers: [],
  providers: []
})
export class RoutesModule {}
