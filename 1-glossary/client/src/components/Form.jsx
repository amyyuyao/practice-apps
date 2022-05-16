import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputWord: '',
      inputDef: ''
    };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefChange = this.handleDefChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    // alert('A word was submitted: ' + this.state.inputWord);
    // event.preventDefault();
    this.props.onSubmit(this.state.inputWord, this.state.inputDef);
  }

  render() {
    return (<div>
      <h4>Add more words!</h4>
      <input type="text" placeholder="word" value={this.state.inputWord} onChange={this.handleWordChange} />
      {' '}
      <input type="text" placeholder="definition" value={this.state.inputDef} onChange={this.handleDefChange} />
      {' '}
      <button onClick={this.handleSubmit}> Add Word </button>
    </div>)
  }
}

export default Form;