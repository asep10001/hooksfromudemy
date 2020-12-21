import React, { useState } from "react";
import "./App.css";
import { Accordion, Dropdown, Search, Translate } from "./components";
import Route from './components/Route'

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


const App = () => {
  const [selected, setselected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path='/dropdown'>
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown</button>
        {showDropdown ? (
          <Dropdown
            selected={selected}
            onSelectedChange={setselected}
            options={options}
          />
        ) : null}
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </>
  );
};

export default App;
