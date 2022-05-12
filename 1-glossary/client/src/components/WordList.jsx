import React from "react";

var WordList = ({ data }) => (
  <div>
    {data.map((item) => (
      <ul key={item.id}>
        <h4>{item.word}</h4>
        <li>definition: {item.definition}</li>
      </ul>
    ))}
  </div>
);

export default WordList;