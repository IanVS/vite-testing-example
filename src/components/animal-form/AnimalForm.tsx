import { useMutation, useQueryClient } from 'react-query';
import { addAnimal } from '../../api/animals';
import type { AddAnimalVariables } from '../../api/animals';
import { useState } from 'react';

type Props = {
  onSuccess: (message: string) => void;
  onFailure: (message: string) => void;
};

export function AnimalForm({ onSuccess, onFailure }: Props) {
  const [hasFailed, setHasFailed] = useState(false);
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
        try {
          await mutation.mutateAsync(data);
          queryClient.invalidateQueries('animals');
          onSuccess(`Added ${data.name} successfully.`);
        } catch {
          setHasFailed(true);
          onFailure(`Could not add ${data.name}`);
        }
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

      <button style={{ marginTop: 16, color: hasFailed ? 'red' : 'black' }}>Submit</button>
    </form>
  );
}
