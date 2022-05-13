import React from "react";
import WordEntry from './WordEntry.jsx';


var WordList = ({ data, onEdit }) => (
  <div>
    {data.map((entry) => (
      <WordEntry
        entry={entry}
        key={entry._id}
        onEdit={onEdit}
      />
    ))}
  </div>
);

export default WordList;