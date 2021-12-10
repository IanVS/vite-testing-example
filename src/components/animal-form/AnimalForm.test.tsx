/**
 * This demonstrates the use of a jest-mock function being passed to a story,
 * and then asserted against.
 */

import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import * as Stories from './AnimalForm.stories';

const { Example, Failure } = composeStories(Stories);

describe('<AnimalForm/>', () => {
  // This test uses a story without a `play` function, so it interacts with the story directly
  it('should call onSuccess if successfully submitted.', async () => {
    const successMock = jest.fn();
    const { getByLabelText, getByRole } = render(<Example onSuccess={successMock} />);
    userEvent.type(getByLabelText('Name:'), 'Wyatt');
    userEvent.type(getByLabelText('Type:'), 'woodpecker');
    userEvent.type(getByLabelText('Age:'), '13');
    userEvent.click(getByRole('button', { name: 'Submit' }));
    await waitFor(() => expect(successMock).toBeCalledWith('Added Wyatt successfully.'));
  });

  // This test calls the `play` function from the story
  it('should call onFailure if an error is received from the api server.', async () => {
    const failureMock = jest.fn();
    const { container } = render(<Failure onFailure={failureMock} />);
    await Failure.play({ canvasElement: container });
    await waitFor(() => expect(failureMock).toBeCalledWith('Could not add Bill'));
  });
});
