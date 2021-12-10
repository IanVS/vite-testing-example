export const HOST = 'http://localhost:9300';
export const NAMESPACE = '/v1';

export async function get<TReturn = unknown>(
  url: string,
  headerOverrides: Record<string, string> = {}
): Promise<TReturn> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...headerOverrides,
  };

  const response = await fetch(`${HOST}${NAMESPACE}${url}`, {
    method: 'GET',
    headers,
    referrerPolicy: 'no-referrer',
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
}

export async function post<TReturn = unknown>(
  url: string,
  data = {},
  headerOverrides: Record<string, string> = {}
): Promise<TReturn> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...headerOverrides,
  };

  const response = await fetch(`${HOST}${NAMESPACE}${url}`, {
    method: 'POST',
    headers,
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
}
