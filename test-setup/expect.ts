import expect from '@storybook/expect';

// Put expect on global scope, so we can use it in our tests without requiring and patching it each time
(window as any).expect = expect; // eslint-disable-line @typescript-eslint/no-explicit-any
