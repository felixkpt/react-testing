// MyComponent.test.js
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';
import axios from 'axios';

jest.mock('axios');

test('should render a list of items from the API', async () => {
  // Mock the API response
  axios.get.mockResolvedValue({
    data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
  });

  // Render the component
  render(<MyComponent />);

  // Wait for the component to fetch the data
  await screen.findByText('Item 1');

  // Expect the component to render the list of items
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});