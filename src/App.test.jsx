import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the page title and a card for every movie', () => {
  render(<App />);
  expect(screen.getByText('ALL SURIYA MOVIES')).toBeInTheDocument();

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(9);
  links.forEach((link) => {
    expect(link).toHaveAttribute('href', expect.stringContaining('imdb.com'));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });
});
