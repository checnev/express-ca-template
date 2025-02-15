import { AppDataSource } from './database';

export function DBconnect() {
  AppDataSource.initialize()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Database connection error:', err));
}
