import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const IS_TESTING = process.env.NODE_ENV === 'test';

// Prevent network messages from being logged to the console
/* eslint-disable @typescript-eslint/no-empty-function */
setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});
/* eslint-enable @typescript-eslint/no-empty-function */

/**
 * This function is used in storybooks as a decorator to add a QueryClientProvider and
 * ReactQueryDevtools to stories.
 */
export const wrapWithQueryProvider = (Component: React.FC) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component />
      {IS_TESTING ? null : <ReactQueryDevtools />}
    </QueryClientProvider>
  );
};

/**
 * This component wraps a QueryClientProvider around its children, for tests
 */
export const QueryProvider = ({ children }: { children?: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
