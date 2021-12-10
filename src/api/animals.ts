import { get, post } from './fetch';
import type { Animal } from '../../types/api';

// GET /animals
export type GetAnimalsResult = Animal[];
export async function getAnimals() {
  return get<GetAnimalsResult>('/animals');
}

// POST /animals
export type AddAnimalResult = Animal;
export type AddAnimalVariables = {
  name: string;
  type: string;
  age: number;
};
export async function addAnimal(animal: AddAnimalVariables) {
  return post<AddAnimalResult>('/animals', animal);
}
