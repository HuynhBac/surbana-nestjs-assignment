import { Config } from "./config.factory";

export const ProductionConfig: Config = {
  postgreDBConfig: {
    host: process.env.POSTGRE_DB_HOST || '',
    port: process.env.POSTGRE_DB_PORT || '',
    username: process.env.POSTGRE_DB_USERNAME || '',
    password: process.env.POSTGRE_DB_PASSWORD || '',
    database: process.env.POSTGRE_DB_DATABASE || '',
    synchronize: false,
  },
  serverConfig: {
    port: process.env.SERVER_PORT || ''
  }
}