# Vite testing example

This project is an example of the approach I take to test my frontend application.

It uses a combination of the following libraries:

- [React](https://reactjs.org/) as the javascript framework
- [Vite](https://vitejs.dev/) as the build tool
- [Storybook](https://storybook.js.org/) as a component library and basis for all component tests
- [storybook-builder-vite](https://github.com/eirslett/storybook-builder-vite) so I can build my stories with vite
- [MirageJS](https://miragejs.com/) to mock out api calls in stories/tests
- [React-Query](https://react-query.tanstack.com/) for making and caching api calls
- [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) to run unit tests in a browser
- [vite-web-test-runner-plugin](https://github.com/material-svelte/vite-web-test-runner-plugin) to use the test runner with vite
- [@storybook/expect](https://github.com/storybookjs/expect) to use jest's `expect` assertions
- [@storybook/testing-react](https://github.com/storybookjs/testing-react) to write unit tests for stories
- [Testing-library](https://testing-library.com/) for interacting with components in stories/tests

## Approach

The main testing approach is to create storybook stories for components and even pages, and then test against those stories. This has a few benefits:

- Having stories is great, and allows my teammates (developers and designers) to review my components in isolation from the rest of the app.
- Using the stories in my tests means that I don't need to duplicate the component setup twice, once for stories and once for tests.
- By testing the stories, I can be certain that I didn't accidentally break a story _or_ a component.
- If a component test is failing, I can look at the story and visually debug what might be happening.
- I can use [chromatic](https://www.chromatic.com/) snapshots to ensure that nothing has visually changed that I didn't intend.

Furthermore, I can use the `play` function of storybook 6.4, and execute user interactions directly in the story, preventing the need for a separate test file in some cases. The next version of storybook will include a test runner to execute the play functions as tests, but for now chromatic snapshots fit that need for me, since they will fail if a `play` function fails. See `src/screens/animals/AnimalsPage.stories.tsx` for an example of a story with a test built in to the `play` function.

### API Mocks

I use MirageJS to mock out network calls, which allows me to easily create different kinds of stories for each component, simply by adjusting the state of the mock api server or what it returns. See `src/components/animal-list/AnimalList.stories.tsx` for an example of creating empty, loading, error, and populated stories by changing the api mocks.
