import type { LocationDescriptor } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';

/**
 * This function is used in storybooks as a decorator to add our customized useLocation hook to stories.
 *
 * @param initialRoute The initial route to set in the memory router
 * @param path react-router path prop, useful for getting match.params into our tests
 */
export const makeRouterWrapper = (initialRoute: LocationDescriptor = '/', path = '/') => {
  const RouterWrapper = (Component: React.FC) => {
    return (
      <MemoryRouter initialEntries={initialRoute ? [initialRoute] : undefined}>
        <Route path={path}>
          <Component />
        </Route>
      </MemoryRouter>
    );
  };
  return RouterWrapper;
};

/**
 * This component wraps its children with a memory router, for use in tests
 */
export const RouterProvider = ({
  children,
  initialPath,
}: {
  children: React.ReactNode;
  initialPath?: LocationDescriptor;
}) => {
  return <MemoryRouter initialEntries={initialPath ? [initialPath] : undefined}>{children}</MemoryRouter>;
};
