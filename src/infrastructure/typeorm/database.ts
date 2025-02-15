import { DataSource } from 'typeorm';
import { UserStorageElement } from './models/user-storage-element';
import path from 'path';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(__dirname, 'database.sqlite'),
  synchronize: true, // only for dev
  logging: false,
  entities: [UserStorageElement],
});
