import type { Meta, StoryObj } from '@storybook/react';
import { makeNetworkDecorators, makeApiMocks } from '../../../test-setup/decorators';
import { AnimalForm } from './AnimalForm';

const meta: Meta = {
  component: AnimalForm,
  decorators: [...makeNetworkDecorators(), makeApiMocks()],
};
export default meta;

export const Example: StoryObj = {
  args: {},
};
