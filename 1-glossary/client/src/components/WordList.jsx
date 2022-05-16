import React from "react";
import WordEntry from './WordEntry.jsx';


var WordList = ({ data, onEdit, onDelete }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>word</th>
          <th>definition</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <WordEntry
            entry={entry}
            key={entry._id}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default WordList;