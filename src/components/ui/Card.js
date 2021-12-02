import React from "react";
import classes from "./Card.module.css";

//children wraps all elements inside the parent div authomatically.
const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
