import type { Meta, StoryObj } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Response } from 'miragejs';
import { makeNetworkDecorators, makeApiMocks } from '../../../test-setup/decorators';
import { AnimalForm } from './AnimalForm';

const meta: Meta = {
  component: AnimalForm,
  decorators: [...makeNetworkDecorators()],
};
export default meta;

export const Example: StoryObj<React.ComponentPropsWithoutRef<typeof AnimalForm>> = {
  // Normally we'd use @storybook/addon-actions, but it is not yet compatible with storybook-builder-vite
  args: {
    onFailure: console.log,
    onSuccess: console.log,
  },
  decorators: [makeApiMocks()],
};

export const Failure: StoryObj<React.ComponentPropsWithoutRef<typeof AnimalForm>> = {
  ...Example,
  play: async () => {
    await userEvent.type(screen.getByLabelText('Name:'), 'Bill');
    await userEvent.type(screen.getByLabelText('Type:'), 'buffalo');
    await userEvent.type(screen.getByLabelText('Age:'), '14');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  },
  decorators: [
    makeApiMocks((server) => {
      server.post('/animals', () => new Response(500, undefined, 'Failed to fetch'));
    }),
  ],
};
