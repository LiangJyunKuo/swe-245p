// Sleep view
import React from "react";
import Content from "./Content";

const Sleep = () => {
  const content = [
    "Sleep is an important part of your daily routine—you spend about one-third of your time doing it.",
    "Sleep – and getting enough of it at the right times -- is as essential to survival as food and water. Without sleep, you can’t form or maintain the pathways in your brain that let you learn and create new memories, and it's harder to concentrate and respond quickly.",
  ];

  return <Content title="SLEEP" content={content} />;
};

export default Sleep;
