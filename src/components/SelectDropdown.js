// SelectDropdown.jsx
import React, { useEffect } from 'react';

const selectDropdownOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

const SelectDropdown = () => {
  useEffect(() => {
    //component did mount;
    let el = document.getElementById('my-dropdown');
    console.log(el);
    el.click();
  }, []);
  const handleOptionChange = (data) => {
    alert(data);
  };
  return (
    <select
      data-testid='select-dropdown'
      onClick={() => console.log('clicked')}
      onChange={handleOptionChange}
      id={'my-dropdown'}
      aria-expanded={false}
    >
      {selectDropdownOptions.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
