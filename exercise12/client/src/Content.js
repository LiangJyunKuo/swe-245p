import React from "react";
import "./Content.css";

const Content = ({ title, content }) => {
  return (
    <article>
      <h1>{title}</h1>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
};

export default Content;
