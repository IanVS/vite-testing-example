import type { LocationDescriptor } from 'history';
import { useApiMocks } from './useApiMocks';
import { wrapWithQueryProvider } from './query-provider';
import { makeRouterWrapper } from './router-provider';

export { wrapWithQueryProvider };

/**
 * makeNetworkDecorators returns a list of decorators for use in storybooks.
 */
export const makeNetworkDecorators = (initialRoute?: LocationDescriptor, path?: string) => {
  const routerWrapper = makeRouterWrapper(initialRoute, path);

  return [wrapWithQueryProvider, routerWrapper];
};

/**
 * makeApiMocks is a decorator factory which sets up and shuts down a mock api server.
 * The server can be configured through the use of a provided callback.
 */
export const makeApiMocks = (serverSetup?: Parameters<typeof useApiMocks>[0]) => {
  const ApiMockedComponent = (Component: React.FC) => {
    useApiMocks(serverSetup);

    return <Component />;
  };
  return ApiMockedComponent;
};
