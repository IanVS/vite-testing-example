/**
 * This is an example of using jest-fetch-mock and expect.objectContaining
 * to make assertions about calls to fetch.
 */

import fetchMock from 'jest-fetch-mock';
import { get } from './fetch';

// Save off the original fetch method so that we can restore it.
const originalFetch = window.fetch;

describe('get', () => {
  beforeEach(() => {
    window.fetch = fetchMock;
    fetchMock.resetMocks();
  });

  afterEach(() => {
    window.fetch = originalFetch;
  });

  it('should make a fetch with correct arguments', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: {} }));
    await get('/foo');

    const expectedHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const expectedInit = { headers: expectedHeaders, method: 'GET' };
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toBeCalledWith('http://localhost:9300/v1/foo', expect.objectContaining(expectedInit));
  });

  it('should allow default headers to be overridden', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: {} }));
    await get('/foo', { Accept: 'application/text' });

    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toBeCalledWith(
      'http://localhost:9300/v1/foo',
      expect.objectContaining({
        headers: expect.objectContaining({ Accept: 'application/text' }),
      })
    );
  });
});
