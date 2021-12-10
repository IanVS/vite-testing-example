import type { MockApiServer } from './mock-types';
import type * as Animals from '../src/api/animals';

export function createAnimalsRoutes(server: MockApiServer) {
  server.get('/animals', (schema, request): Animals.GetAnimalsResult => {
    const allAnimals = schema.all('animal').models;

    return allAnimals.map((animal) => animal.attrs);
  });

  server.post('/animals', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    return schema.create('animal', attrs);
  });
}
