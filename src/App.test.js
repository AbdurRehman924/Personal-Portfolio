import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  const element = screen.getByText(/abdur rehman/i);
  expect(element).toBeInTheDocument();
});

test('renders contact information', () => {
  render(<App />);
  const emailLink = screen.getByText(/pure.art.endeavor@gmail.com/i);
  expect(emailLink).toBeInTheDocument();
});
