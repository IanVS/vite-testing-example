/**
 * An example of a test that demonstrates checking a thrown error.
 */

import { somethingThatThrows } from './somethingThatThrows';

describe('somethingThatThrows', () => {
  it('rejects', () => {
    expect(somethingThatThrows).rejects.toThrowError('Something went wrong.');
  });
});
