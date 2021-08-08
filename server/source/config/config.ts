import { config } from 'dotenv';

config();

export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET + '',
  TOKEN_ISSUER: process.env.TOKEN_ISSUER + '',
  EXPIRE_TIME: process.env.EXPIRE_TIME + '',
  DB_URL: process.env.DB_URL + '',
  PORT: process.env.PORT + ''
};
