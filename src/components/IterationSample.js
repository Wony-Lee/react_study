import React from "react";

const IterationSample = () => {
  const item = ["눈사람", "얼음", "눈", "바람"];
  return (
    <ul>
      {item.map((item, i) => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  );
};

export default IterationSample;
