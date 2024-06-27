import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      type: process.env.DB_TYPE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
    },
    api: {
      port: process.env.PORT,
      jwtSecret: process.env.JWT_SECRET,
    },
  };
});
