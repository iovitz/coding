import * as config from 'config';

interface Config {
  server: {
    port: number;
  };
  mysql: {
    host: string;
    port: number;
    dbname: string;
    database: string;
    username: string;
    password: string;
  };
}

export default class EnvConfig {
  private constructor() {}

  static get<T extends keyof Config>(key: T): Readonly<Config[T]> {
    console.log(key);
    return config.get(key) as Config[T];
  }
}
