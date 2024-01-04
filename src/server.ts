import fastifyEnv from '@fastify/env';
import App from './app';
import { envOptions } from './infrastructure/config/env';
import DbPlugin from '../plugins/db.plugin';

async function bootstrap() {
  const app = new App();
  await app.$server.register(fastifyEnv, envOptions());
  await app.$server.register(DbPlugin);
  await app.listen();
}

bootstrap();