import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  it('renders the greeting with the provided name', () => {
    render(<Greeting name="John" />);
    
    expect(screen.getByText(/Hello, John!/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome to our application./i)).toBeInTheDocument();
  });
}); 