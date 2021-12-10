import type { render as globalRender } from '../test-setup/render';
import '@types/mocha';

declare global {
  declare const render: typeof globalRender;
}
