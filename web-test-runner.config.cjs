process.env.NODE_ENV = 'test';

const ignoredBrowserLogs = ['[vite] connecting...', '[vite] connected.'];

module.exports = {
  files: ['src/**/*.test.{ts,tsx}'],
  plugins: [require('vite-web-test-runner-plugin')()],
  // This testRunnerHtml allows us to inject variables into global scope
  testRunnerHtml: (testFramework) => `<html>
    <body>
    <script type="module">
      window.global = window;
    </script>
    <script type="module" src="/test-setup/globals.ts"></script>
    <script id='uit' type="module" src="${testFramework}"></script>
    </body>
  </html>`,
  filterBrowserLogs: ({ args }) => {
    return !args.some((arg) => ignoredBrowserLogs.includes(arg));
  },
  testFramework: {
    config: {
      timeout: '4000',
      rootHooks: {
        // We can't actually add them here, since WTR serializes this config to a string.
        // But we can create the structure and then modify it in our mocha-hooks.js file
      },
    },
  },
};
