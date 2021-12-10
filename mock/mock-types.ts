import type { Registry } from 'miragejs';
// eslint-disable-next-line import/no-unresolved
import type { Server } from 'miragejs/server';
import type { factories } from './factories';
import type { models } from './models';

export type MockApiServer = Server<Registry<typeof models, typeof factories>>;
