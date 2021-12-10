import { Model } from 'miragejs';
import type { Animal } from '../types/api';

const defaultAnimal: Animal = {
  id: '1',
  type: 'monkey',
  name: 'chichi',
  age: 3,
};

export const models = {
  // We need to extend the model so that typescript can infer the properties
  animal: Model.extend(defaultAnimal),
};
