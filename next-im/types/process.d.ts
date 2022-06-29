declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined
    MYSQL_DOMAIN: string
    MYSQL_PORT: string
    MYSQL_DBNAME: string
    MYSQL_USERNAME: string
    MYSQL_PASSWORD: string
  }
}
