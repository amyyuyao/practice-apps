import React from "react";
import ReactDOM from "react-dom";
import exampleData from "./data/exampleData.js";
import WordList from "./components/WordList.jsx";
import Form from "./components/Form.jsx";
import Search from "./components/Search.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      display: []
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

  submit(w, d) {
    axios.post('/glossary', { word: w, definition: d })
      .then(() => {
        this.fetch();
      })
      .catch((err) => {
        console.log('Submit word failed!');
      });
  }

  search(term) {
    if (term.length > 0 && this.state.data.length > 0) {
      let arr = [];
      this.state.data.forEach((entry) => {
        if (entry.word.indexOf(term) !== -1) {
          arr.push(entry);
        }
      })
      this.setState({
        display: arr
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Here is Glossary!</h2>
        <div>
          <Form onSubmit={this.submit.bind(this)} />
        </div>
        <div>
          <Search onSearch={this.search.bind(this)} />
        </div>
        <div>
          <WordList
          data={this.state.display.length ? this.state.display : this.state.data}
          onEdit={this.submit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;

// Render the `App` to the DOM
ReactDOM.render(<App />, document.getElementById("root"));

