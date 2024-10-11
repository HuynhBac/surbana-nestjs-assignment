import { Module, OnModuleInit } from '@nestjs/common';
import { PostgreDBProvider } from './postgres-db.providers';
import { logger } from 'src/utils/logger';
import { DataSource } from 'typeorm';

@Module({
  imports: [PostgreDBProvider],
  exports: [PostgreDBProvider]
})
export class DatabaseModule implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  async onModuleInit() {
    if (this.dataSource.isInitialized) {
      logger.log('Postgre Database connection successfully!');
    } else {
      logger.error('Postgre Database connection failed!');
    }

  }
}
