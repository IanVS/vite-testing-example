import type { Meta, StoryObj } from '@storybook/react';
import { Response } from 'miragejs';
import { makeApiMocks, makeNetworkDecorators } from '../../../test-setup/decorators';
import { AnimalList } from './AnimalList';

const meta: Meta = {
  component: AnimalList,
  decorators: makeNetworkDecorators(),
};
export default meta;

export const Example: StoryObj = {
  args: {},
  decorators: [
    makeApiMocks((server) => {
      server.createList('animal', 10);
    }),
  ],
};

export const Loading: StoryObj = {
  args: {},
  // 1 minute long loading state
  decorators: [makeApiMocks((server) => (server.timing = 60000))],
};

export const Empty: StoryObj = {
  args: {},
  decorators: [makeApiMocks()],
};

/**
 * Show an error state after react-query retries the fetch several times
 */
export const ErrorState: StoryObj = {
  args: {},
  decorators: [
    makeApiMocks((server) => {
      server.get('/animals', () => new Response(500, undefined, 'Failed to fetch'));
    }),
  ],
};
