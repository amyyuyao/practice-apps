import React from "react"

class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        contact_name: '',
        contact_email: '',
        contact_password: ''
      },
      edited: "false"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    const { newContact } = this.state;
    newContact[e.target.name] = e.target.value;
    this.setState({ newContact });
  }

  handleSubmit() {
    this.setState({
      edited: "true"
    })
  }

  handleEdit() {
    this.setState({
      edited: "false"
    })
  }

  render() {
    return (
      <>
      <h3>Contact information</h3>
      <table>
        <tbody>
          <tr>
          {this.state.edited === "true" ?
            (<>
              <td>{this.state.contact['contact_name']}</td>
              <td>{this.state.contact.contact_email}</td>
              <td>hello</td>
              <td>{this.state.contact.contact_password}</td>
              <button onClick={this.handleEdit}> Edit </button>
            </>
            ) : (
              <>
                <td><input type="text" placeholder="name" onChange={this.handleChange} />{' '}</td>
                <td><input type="text" placeholder="email" onChange={this.handleChange} />{' '}</td>
                <td><input type="text" placeholder="password" onChange={this.handleChange} />{' '}</td>
                <button onClick={this.handleSubmit}> Next </button>
              </>
            )}
            </tr>
        </tbody>
      </table >
      </>
    )
  }
}

export default F1;