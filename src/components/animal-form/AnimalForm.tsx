import { useMutation, useQueryClient } from 'react-query';
import { addAnimal } from '../../api/animals';
import type { AddAnimalVariables } from '../../api/animals';

export function AnimalForm() {
  const mutation = useMutation(addAnimal);
  const queryClient = useQueryClient();

  return (
    <form
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // Normally would use a library like react-hook-form that ensures type safety
        const data = Object.fromEntries(formData) as unknown as AddAnimalVariables;
        await mutation.mutateAsync(data);
        queryClient.invalidateQueries('animals');
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label>
          Name:
          <input name="name" />
        </label>
        <label>
          Type:
          <input name="type" />
        </label>
        <label>
          Age:
          <input name="age" type="number" />
        </label>
      </div>

      <button style={{ marginTop: 16 }}>Submit</button>
    </form>
  );
}
