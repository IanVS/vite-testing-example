/* eslint-disable @typescript-eslint/no-explicit-any */
import { cleanup } from '@testing-library/react';

// HACK:  WTR serializes the config to a string, so we can't define our hooks in
// web-test-runner.config.cjs.  Instead, we'll modify it from the global window here.
(window as any).__WTR_CONFIG__.testFrameworkConfig.rootHooks = {
  afterEach() {
    /**
     * The automatic-cleanup functionality of testing-library does not work in our situation,
     * because mocha's `afterEach` is not defined at the time that `render` is being imported.
     * We have to wait until mocha has been added to the page, then set up our global hooks.
     * This one will unmount anything that has been rendered after each test.
     */
    cleanup();
  },
};
