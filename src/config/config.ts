import { Constant } from "src/utils/constant";
import { DevelopmentConfig } from "./development";
import { ProductionConfig } from "./production";
import { Config } from "src/factory/config.factory";

const getConfig = () => {
  let config: Config = DevelopmentConfig;
  const env = process.env.ENVIRONMENT;
  if (env === Constant.ENVIRONMENT.PRODUCTION) {
    config = ProductionConfig;
  }
  return config;
};

export const config = getConfig();