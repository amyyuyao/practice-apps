import React from "react";
import exampleData from "../data/exampleData.js";
import WordList from "./WordList.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: exampleData
    };
  }

  render() {
    return (
      <div>
        <h2>Here is Glossary!</h2>
        <WordList data={this.state.data}/>
      </div>
    );
  }
}

export default App;