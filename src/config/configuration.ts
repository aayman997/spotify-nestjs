import * as process from 'node:process';

interface ConfigReturnType {
  appHost: string;
  port: number;
  jwtSecret: string;
  NODE_ENV: string;
  databaseHost: string;
  databasePort: number;
  databaseUsername: string;
  databasePassword: string;
  databaseName: string;
}

export default (): ConfigReturnType => ({
  appHost: process.env.APP_HOST,
  port: parseInt(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  databaseHost: process.env.DATABASE_HOST,
  databasePort: parseInt(process.env.DATABASE_PORT),
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
});
