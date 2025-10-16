import { render, screen } from '@testing-library/react';
import App from './App'; // correct import for default export

test('renders Git deployment message', () => {
  render(<App />);
  const headingElement = screen.getByText(/This is Git deployment test/i);
  expect(headingElement).toBeInTheDocument();
});
