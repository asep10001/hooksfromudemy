import React, { useState } from "react";
import "./App.css";
import { Accordion, Dropdown, Search } from "./components";

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
  return (
    <>
      <Accordion items={items} />
      <Search />
      <Dropdown
        selected={selected}
        onSelectedChange={setselected}
        options={options}
      />
    </>
  );
};

export default App;
