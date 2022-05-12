import React from "react";
import ReactDOM from "react-dom";
import exampleData from "./data/exampleData.js";
import WordList from "./components/WordList.jsx";
// import Search from "./components/Search.jsx";
import Form from "./components/Form.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    axios.get('/glossary')
    .then((res) => {
      this.setState({
        data: res.data
      });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  Submit(w, d) {
    axios.post('/glossary', { word: w, definition: d })
    .then(() => {
      this.fetch();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h2>Here is Glossary!</h2>
        <div>
          <Form onSubmit={this.Submit.bind(this)}/>
        </div>
        <div>
          <WordList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;

// Render the `App` to the DOM
ReactDOM.render(<App />, document.getElementById("root"));

