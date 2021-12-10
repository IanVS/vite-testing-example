/**
 * This file sets up a global `jest` that is really just a mock, so we can use `jest.fn` and `jest.spyOn`.
 * We put it on the `jest` namespace so that typescript works automatically, and also it will ease our transition
 * to full-blown jest if we ever can use it together with web-test-runner.
 */
import { ModuleMocker } from 'jest-mock';

const mock = new ModuleMocker(window);

// Put jest mocks on global scope, so we can use it in our tests without requiring and setting it up each time
(window as any).jest = mock; // eslint-disable-line @typescript-eslint/no-explicit-any
