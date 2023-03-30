import { render, screen } from '@testing-library/react';
/* import { userEvent } from '@testing-library/react'; */
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/calc/i);
  const mult = screen.getByRole('button', {
    name: /\*/i
  });
  const button3 = screen.getByRole('button', {
    name: /5/i
  });
  const button2 = screen.getByRole('button', {
    name: /2/i
  });


  expect(linkElement).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
  /* userEvent.click(button2); */
  expect(button3).toBeInTheDocument();
  /* userEvent.click(button3); */
  expect(mult).toBeInTheDocument();
});
