import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, setactiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setactiveIndex(index);
  };
  const renderedItems = props.items.map((item, index) => {
      const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={index}>
        <div className={`title ${active}`}onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.contents}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
