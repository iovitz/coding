// process.env types
declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined
    port: number
  }
}
