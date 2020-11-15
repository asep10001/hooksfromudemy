import React from "react";
import "./App.css";
import { Accordion, Search } from "./components";

const items = [
  {
    title:'What is React?',
    contents : 'React is a frontend JS framework'
  },
  {
  
    title: 'Why Use React?',
    contents: 'React is a favorite JS libray among engineers'
  },
  {
    title: 'How do you use react?',
    contents: 'Use React by creating components'
  }

]

const App = () => {
  return (
    <>
      <Accordion items={items} />
      <Search />
    </>
  );
}

export default App;
