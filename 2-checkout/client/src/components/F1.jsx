import React from "react"

class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        contact_name: props.data[0].contact_name,
        contact_email: props.data[0].contact_email,
        contact_password: props.data[0].contact_password,
      },
      edited: "false"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { contact } = this.state;
    contact[e.target.name] = e.target.value;
    this.setState({ contact });
  }

  render() {
    return (
      <>
        <h4>Contact information</h4>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="name" onChange={this.handleChange} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="email" onChange={this.handleChange} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="password" onChange={this.handleChange} />{' '}</td>
            </tr>
          </tbody>
        </table >
      </>
    )
  }
}

export default F1;