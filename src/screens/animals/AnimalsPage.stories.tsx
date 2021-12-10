import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, screen, waitFor } from '@storybook/testing-library';
import { makeNetworkDecorators, makeApiMocks } from '../../../test-setup/decorators';
import { AnimalsPage } from './AnimalsPage';

const meta: Meta = {
  component: AnimalsPage,
  decorators: [...makeNetworkDecorators()],
};
export default meta;

export const Empty: StoryObj = {
  args: {},
  decorators: [makeApiMocks()],
};

export const AddedAnimal: StoryObj = {
  args: {},
  decorators: [makeApiMocks()],
  play: async () => {
    await userEvent.type(screen.getByLabelText('Name:'), 'Greg');
    await userEvent.type(screen.getByLabelText('Type:'), 'gorilla');
    await userEvent.type(screen.getByLabelText('Age:'), '34');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    // Make sure the form submission worked correctly
    await waitFor(() => screen.getByText('Greg the gorilla is 34 years old.'));
  },
};
