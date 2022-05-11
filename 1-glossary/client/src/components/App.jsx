import React from "react";
import exampleData from "../data/exampleData.js";
import WordList from "./WordList.jsx";
import Search from './Search.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }


  render() {
    return (
      <div>
        <h2>Here is Glossary!</h2>
        <div>
          <Form onSubmit={this.handleSubmit.bind(this)}/>
        </div>
        <div>
          <WordList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;