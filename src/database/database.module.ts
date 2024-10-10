import { Module } from '@nestjs/common';
import { PostgreDBProvider } from './postgres-db.providers';

@Module({
  imports: [PostgreDBProvider],
  exports: [PostgreDBProvider]
})
export class DatabaseModule {}
