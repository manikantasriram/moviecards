/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img className="img" src={props.Img} />
        <div className="Title">{props.Title}</div>
        <div className="Content">{props.Content}</div>
        <a href={props.Link} target="_blank" rel="noreferrer">
          <button className="Button">Click here for Info</button>
        </a>
    </div>
  );
};

export default Card;
