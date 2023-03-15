import { render, screen, fireEvent } from '@testing-library/react';
import { Default } from './App.stories'; //👈 Our stories imported here.

// import your story from App.stories.js


// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library



it('Checks if the button initially displays Click me!', () => {
    const { getByText } = render(<Default {...Default.args} />);
    const btn = getByText('Click me!');
    expect(btn).toBeInTheDocument(); //the "Click me!" button is present in the document
  });
  

it('Checks if clicking the button changes its text to Thanks!', () => {
    const { getByText } = render(<Default {...Default.args} />);
    fireEvent.click(getByText('Click me!'));
    const thanksBtn = getByText('Thanks!');
    expect(thanksBtn).toBeInTheDocument(); //the button's text is now "Thanks!"
    const clickBtn = screen.queryByText('submit');
    expect(clickBtn).not.toBeInTheDocument(); //the button's text is no longer "Click me!"
  });