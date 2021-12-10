import { useQuery } from 'react-query';
import { getAnimals } from '../../api/animals';
import { Animal } from '../animal/Animal';

export function AnimalList() {
  const query = useQuery('animals', getAnimals);

  // Loading state
  if (query.isLoading) return <>Loading...</>;

  if (query.data) {
    // Empty state
    if (!query.data.length) return <>No animals</>;

    // Populated list
    return (
      <ul>
        {query.data.map((animal) => (
          <li key={animal.id}>
            <Animal {...animal} />
          </li>
        ))}
      </ul>
    );
  }

  // Error state
  return <>Couldn’t get animals</>;
}
