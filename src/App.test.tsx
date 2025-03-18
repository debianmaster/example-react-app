import { render, screen } from '@testing-library/react';

// Mock the CSS and SVG imports
jest.mock('./App.css', () => ({}), { virtual: true });
jest.mock('./assets/react.svg', () => 'react-logo', { virtual: true });
jest.mock('/vite.svg', () => 'vite-logo', { virtual: true });

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    
    // Vite + React logo text should be visible
    const headline = screen.getByText(/Vite \+ React/i);
    expect(headline).toBeInTheDocument();
  });
}); 