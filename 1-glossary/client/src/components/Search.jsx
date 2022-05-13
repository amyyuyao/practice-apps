import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleSearch() {
    alert('A word was searched');
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
        <label>
            <input type="text" value={this.state.term} onChange={this.handleSearchChange} />
        </label>
        <button onClick={this.handleSearch}> Search </button>
      </div>)
  }
}

export default Search;