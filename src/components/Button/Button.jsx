import classNames from "classnames";
import React from "react";
import styles from "./Button.css";

export const Button = ({ classes, text, icon, onClick, type, ...rest }) => {
  return (
    <button
      className={`btn ${classNames(classes)}`}
      onClick={onClick}
      type={type ? type : ""}
      {...rest}
    >
      {icon}
      {text}
    </button>
  );
};
