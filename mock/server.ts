import { createServer } from 'miragejs';
// eslint-disable-next-line import/no-unresolved
import type { ServerConfig } from 'miragejs/server';
import { HOST, NAMESPACE } from '../src/api/fetch';
import { factories } from './factories';
// import { fixtures } from './fixtures';
import { models } from './models';
import { createAnimalsRoutes } from './routes';

export const serverConfig: ServerConfig<typeof models, typeof factories> = {
  models,
  factories,
  // fixtures,
  seeds(server) {
    // Do not load default data in storybook, each story should handle its own needs
    if (!import.meta.env.STORYBOOK) {
      server.loadFixtures();
    }
  },
  routes() {
    this.urlPrefix = HOST;
    this.namespace = NAMESPACE;

    createAnimalsRoutes(this);
  },
};

// Re-exported for App.tsx, so we can dynamically import and avoid bundling miragejs in production
export { createServer };

export const makeServer = function ({ environment = 'test' } = {}) {
  return createServer({ ...serverConfig, environment });
};
