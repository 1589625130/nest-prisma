import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'nest_study',
  };
});
