import React, { useState } from "react";
import "./App.css";
import { Accordion, Dropdown, Search, Translate } from "./components";

const items = [
  {
    title: "What is React?",
    contents: "React is a frontend JS framework",
  },
  {
    title: "Why Use React?",
    contents: "React is a favorite JS libray among engineers",
  },
  {
    title: "How do you use react?",
    contents: "Use React by creating components",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />
  }
}

const showLists = () => {
  if (window.location.pathname === '/list') {
    return <Search />
  }
}

const showDropdown1 = (showDropdown, setShowDropdown, selected, setselected) => {

  if (window.location.pathname === '/dropdown') {
    return <>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
  </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setselected}
          options={options}
        />
      ) : null}
    </>
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />
  }
}

const App = () => {
  const [selected, setselected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <>
      {showAccordion()}
      {showLists()}
      {showDropdown1(showDropdown, setShowDropdown, selected, setselected)}
      {showTranslate()}
    </>
  );
};

export default App;
