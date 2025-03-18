import { render, screen, fireEvent } from '@testing-library/react';

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

  it('increments count when button is clicked', () => {
    render(<App />);
    
    // Check initial count is 0
    const button = screen.getByText(/count is 0/i);
    expect(button).toBeInTheDocument();
    
    // Click the button
    fireEvent.click(button);
    
    // Check count is incremented to 1
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
}); 