import express from 'express';
import { routes } from './routes';
import { DBconnect } from '@/infrastructure/typeorm/connect';

export function initialize() {
  DBconnect();

  const app = express();
  const port = 3001;
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  Object.keys(routes).forEach((route) => {
    console.log(`route /${route} has been registered`);
    app.use(`/${route}`, routes[route]);
  });

  return app;
}
