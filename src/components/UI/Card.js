import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return (
    // value of children prop will always be content between opening and closing tags of custom component (all the stuff between the <Card></Card> tags)
    <div className={classes}>{props.children}</div>
  );
};

export default Card;
