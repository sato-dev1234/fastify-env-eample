import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 'fastify';
import { fastifyPlugin } from 'fastify-plugin';
import { Client } from 'pg';

declare module 'fastify' {
  interface FastifyInstance {
    pg: Client;
  }
}

const dbPlugin: FastifyPluginAsync = async (
  $server: FastifyInstance,
  _opts: FastifyPluginOptions,
): Promise<void> => {
  const client = new Client({
    connectionString: $server.config.DATABASE_URL,
  });
  await client.connect();
  $server.log.info(`Connected to the DB at URL: ${$server.config.DATABASE_URL}`);
  $server.addHook('onClose', async () => {
    await $server.pg.end();
  });
};

export default fastifyPlugin(dbPlugin, '4.x');
