import { composeStories } from '@storybook/testing-react';
import * as Stories from './Animal.stories';

const { Example } = composeStories(Stories);

describe('<Animal/>', () => {
  it('should put the pieces together into a sentence.', () => {
    const { getByText } = render(<Example />);
    expect(getByText('Frank the elephant is 55 years old.')).toBeInTheDocument();
  });
});
