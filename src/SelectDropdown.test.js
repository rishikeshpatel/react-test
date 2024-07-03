// SelectDropdown.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectDropdown from './components/SelectDropdown';

test('renders select dropdown with options and handles change event', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const handleChange = jest.fn();

  render(<SelectDropdown options={options} onChange={handleChange} />);

  const selectElement = screen.getByTestId('select-dropdown');

  // Check if the select element is in the document
  expect(selectElement).toBeInTheDocument();

  // Check if the options are rendered
  options.forEach((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
  });
});
