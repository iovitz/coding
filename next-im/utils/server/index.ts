import Ajax from './Ajax'

export const anywayServer = new Ajax('', 10000)
export const nextServer = new Ajax('http://localhost:29116/api', 10000)
