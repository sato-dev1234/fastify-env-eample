import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';

export interface ApplicationOptions {
  port: number;
  host?: string;
  backlog?: number;
}

class App {
  public $server: FastifyInstance;

  constructor(
    private readonly options: ApplicationOptions = { port: 3000 },
    private readonly fastifyOptions: FastifyServerOptions = { logger: true },
  ) {
    this.$server = fastify(this.fastifyOptions);
  }

  async listen() {
    return this.$server.listen(this.options);
  }
}

export default App;
