import { Config } from "./config.factory";

export const DevelopmentConfig: Config = {
  postgreDBConfig: {
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '123456',
    database: 'surbana-assignment-db',
    synchronize: true,
    logging: false,
    retryAttempts: 15,
    retryDelay: 5000
  },
  serverConfig: {
    port: '3000'
  }
}