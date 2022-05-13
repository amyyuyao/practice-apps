import React from "react";

class WordEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.entry.word,
      definition: props.entry.definition,
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
      word: e.target.value
    })
  }

  handleDefChange(e) {
    this.setState({
      definition: e.target.value
    })
  }

  handleEditSubmit(e) {
    alert('Are you sure to change the definition of the word?');
    this.props.onEdit(this.state.word, this.state.definition);
    this.setState({
      editable: "false"
    })
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
        { this.state.editable === 'true'
          ? (<>
            <td><input type="text" onChange={this.handleWordChange} value={this.state.word}/></td>
            <td><input type="text" onChange={this.handleDefChange} value={this.state.definition}/></td>
            <td><button onClick={this.handleEditSubmit}>Submit change</button></td>
            </>) : (<>
            <td>{this.state.word}</td>
            <td>{this.state.definition}</td>
            <td><button onClick={this.handleEdit}>Edit</button></td>
          {/* <td><button onClick={this.handleDelete}>Delete</button></td> */}
          </>)
        }
        </tr>
        </tbody>
      </table>
    )
  }
}

export default WordEntry;