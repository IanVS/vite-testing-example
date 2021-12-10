import type { Meta, StoryObj } from '@storybook/react';
import { Animal } from './Animal';

const meta: Meta = {
  component: Animal,
};
export default meta;

export const Example: StoryObj = {
  args: {
    name: 'Frank',
    type: 'elephant',
    age: 55,
  },
};
