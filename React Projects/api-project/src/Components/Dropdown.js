// Dropdown Select Show
// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//         <h1>Praful Task...</h1>
//       <select value={selectedOption} onChange={handleChange}>
//         <option value="">Select an option</option>
//         <option value="option1">Soham</option>
//         <option value="option2">Praful</option>
//         <option value="option3">Bharti</option>
//       </select>
//       {selectedOption && <p>You selected: {selectedOption}</p>}
//     </div>
//   );
// };

// export default Dropdown;

// Checkbox with Dropdown Show
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'Soham', label: 'Soham'},
    { value: 'Praful', label: 'Praful' },
    { value: 'Bharti', label: 'Bharti' },
    { value: 'Pushpa', label: 'Pushpa'},
    { value: 'Ananya', label: 'Ananya' },
    { value: 'Anand', label: 'Anand' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event, optionValue) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
    }
  };

  const handleCancelOption = (optionValue) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
  };

  return (
    <div style={{'width' :'12%'}}>
      <div
        className="dropdown"
        style={{ border: '1px solid #ccc', padding: '5px', cursor: 'pointer' }}
        onClick={toggleDropdown}
      >
        Select options
      </div>

      {isOpen && (
        <div className="dropdown-options d-flex flex-column " style={{'padding' : '5px 10px'}}>
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={(event) => handleCheckboxChange(event, option.value)}
                style={{'margin' : '0px 10px 0px 0px'}}
              />
              {option.label}
            </label>
          ))}
          <button onClick={toggleDropdown}>Close</button>
        </div>
      )}
      {selectedOptions.length > 0 && (
        <div>
          <p>Selected options:</p>
          <ul>
            {selectedOptions.map((option) => (
              <li key={option}>
                {option} <button onClick={() => handleCancelOption(option)} style={{'margin' : '0px 0px 10px 0px'}}>X</button>
              </li>
            ))}
          </ul>
          <button onClick={handleClearAll} style={{'margin' : '0px 0px 10px 0px'}}>Clear All</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
