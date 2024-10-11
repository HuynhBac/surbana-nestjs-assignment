export interface Config {
  postgreDBConfig: {
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
  };
  serverConfig: {
    port: string;
  }
}