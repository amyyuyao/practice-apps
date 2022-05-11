import React from "react";

var WordList = ({ data }) => (
  <div>
    {data.map((item) => (
      <ul key={item.id}>
        <li>{item.word}</li>
        <li>{item.definition}</li>
      </ul>

    ))}
  </div>
);

export default WordList;