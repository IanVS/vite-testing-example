/**
 * This is async just so we can demonstrate the `.rejects` method in the test
 */
export async function somethingThatThrows() {
  throw new Error('Something went wrong.');
}
