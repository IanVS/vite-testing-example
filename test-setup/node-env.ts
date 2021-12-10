/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Set up a global `process.env.NODE_ENV` that can be used in storybooks, since
 * they do not yet support `import.meta.env`
 */

(window as any).process = {
  env: {
    NODE_ENV: 'test',
  },
};

// Cause the file to be treated as a module, not a script
export {};
