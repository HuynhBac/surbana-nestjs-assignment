import { Config } from "src/factory/config.factory";

export const DevelopmentConfig: Config = {
  postgreDBConfig: {
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '123456',
    database: 'surbana-assignment-db',
    synchronize: true,
  },
  serverConfig: {
    port: '3000'
  }
}