import faker from 'faker';
import { Factory } from 'miragejs';

export const factories = {
  animal: Factory.extend({
    type() {
      return faker.animal.type();
    },
    name() {
      return faker.name.firstName();
    },
    age() {
      return faker.datatype.number({ min: 0, max: 20 });
    },
  }),
};
