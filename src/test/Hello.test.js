import { render, screen } from '@testing-library/react';
import Hello from '../components/Hello';


test('renders learn react link', () => {
    render(<Hello />);
    const linkElement = screen.getByText("Test crash");
    expect(linkElement).toBeInTheDocument();
  });
  