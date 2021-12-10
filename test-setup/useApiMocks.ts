import { useState, useEffect } from 'react';
import { makeServer } from '../mock/server';

export function useApiMocks(setupServer?: (server: ReturnType<typeof makeServer>) => void) {
  const [server] = useState(() => {
    const server = makeServer({ environment: process.env.NODE_ENV });
    // Need to do this in the useState initializer, or else the component could render
    // before we call it, and then queries will happen before our setup is called.
    setupServer?.(server);
    return server;
  });

  useEffect(() => {
    return () => {
      server.shutdown();
    };
  }, [server]);

  return server;
}
