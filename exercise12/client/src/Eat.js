import React from "react";
import Content from "./Content";

const Eat = () => {
  const content = [
    "Eating (also known as consuming) is the ingestion of food.",
    "In the natural biological world, this is typically to provide a heterotrophic organism with energy and nutrients and to allow for growth.",
  ];

  return <Content title="EAT" content={content} />;
};

export default Eat;
