import React from "react";

class WordEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.word,
      definition: props.definition,
      editable: 'false'
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefChange = this.handleDefChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleEdit() {
    this.setState({
      editable: "true"
    })
  }

  handleWordChange(e) {
    this.setState({
      inputWord: e.target.value
    })
  }

  handleDefChange(e) {
    this.setState({
      inputDef: e.target.value
    })
  }

  handleEditSubmit(e) {
    alert('Are you sure to change the definition of the word?');
    this.props.onEdit(this.state.word, this.state.definition);
  }

  render() {
    return (
      <tbody>
        <tr>
        { this.state.editable === 'true'
          ? (<div>
            <td><input type="text" onChange={this.handleWordChange} value={this.state.word}/></td>
            <td><input type="text" onChange={this.handleDefChange} value={this.state.definition}/></td>
            <td><button onClick={this.handleEditSubmit}>Submit change</button></td>
            </div>) : (<div>
            <td>{this.state.word}</td>
            <td>{this.state.definition}</td>
            <td><button onClick={this.handleEdit}>Edit</button></td>
          {/* <td><button onClick={this.handleDelete}>Delete</button></td> */}
          </div>)
        }
        </tr>
      </tbody>
    )
  }
}

export default WordEntry;