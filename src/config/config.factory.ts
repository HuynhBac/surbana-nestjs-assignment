export interface Config {
  postgreDBConfig: {
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    retryAttempts: number;
    retryDelay: number;
    logging: boolean;
  };
  serverConfig: {
    port: string;
  };
}
