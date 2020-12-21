import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClicked = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsDropdownOpen(false);
    };
    document.body.addEventListener("click", onBodyClicked);
    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className={`ui selection dropdown ${
            isDropdownOpen ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isDropdownOpen ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
