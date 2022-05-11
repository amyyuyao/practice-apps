import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputWord: '',
      inputDef: ''
    };

    this.handleChange = this.handleChange.bind(this);
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
    alert('A word was submitted: ' + this.state.inputWord);
    // event.preventDefault();
    this.props.onSubmit(this.state.inputWord);
    this.props.onSubmit(this.state.inputDef);
  }

  render() {
    return (<div>
      <h4>Add more words!</h4>
        <label>
            word:
            <input type="text" value={this.stata.inputWord} onChange={this.handleWordChange} />
        </label>
        <label>
            definition:
            <input type="text" value={this.stata.inputWord} onChange={this.handleDefChange} />
        </label>
        <button onClick={this.handleSubmit}> Add Words </button>
      </div>)
  }
}

export default Form;