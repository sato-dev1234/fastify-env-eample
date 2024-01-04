import { TObject, Type } from '@sinclair/typebox';
import * as dotenv from 'dotenv';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      DATABASE_URL: string;
    };
  }
}

const schema: TObject = Type.Object({
  DATABASE_URL: Type.String(),
});

export const envOptions = () => {
  if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV is not defined.');
  }
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  return {
    dotenv: true,
    confKey: 'config',
    schema,
    data: process.env,
  };
};
