/* Import */
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'react-feather';

/* Select */
const Select = ({ literal, disabled = false, props }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: 'Todos los destinos',
    value: 0,
  });

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(selectedOption);
  };

  useEffect(() => {
    console.log('---');
  });

  return (
    <div
      className="select min-h-[52px] relative rounded bg-white w-full px-3 mr-4 cursor-pointer"
      disabled={disabled}
      onClick={toggling}
    >
      <label className="absolute text-xs top-2 left-3 w-[78%] text-gray">
        {literal}
      </label>
      <div className="text-sm pt-6">
        {selectedOption.label || 'Selecciona tu destino'}
      </div>
      <span className="absolute right-3 top-[calc(40%_-_4px)] text-gray">
        <ChevronDown />
      </span>

      {isOpen && (
        <ul className="absolute bg-white border-border-select mt-0.5 w-[calc(100%_-_1px)] top-[55px] left-[-1px] text-gray-dark font-light shadow">
          {props.map((option) => (
            <li
              className={`py-1.5 px-2.5 text-sm hover:bg-[#fef5e1] ${
                option.value === selectedOption.value
                  ? 'bg-primary-lighter text-white'
                  : ''
              }`}
              ref={ref}
              onClick={onOptionClicked(option)}
              key={Math.random()}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
