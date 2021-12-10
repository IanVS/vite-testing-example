import { AnimalForm } from '../../components/animal-form/AnimalForm';
import { AnimalList } from '../../components/animal-list/AnimalList';

export function AnimalsPage() {
  return (
    <div style={{ display: 'grid', gap: 32 }}>
      <AnimalForm />
      <AnimalList />
    </div>
  );
}
