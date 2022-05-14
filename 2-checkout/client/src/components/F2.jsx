import React from "react"

class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: {
        add_line1: '',
        add_line2: '',
        add_city: '',
        add_state: '',
        add_zip: '',
        add_phone: '',
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { address } = this.state;
    address[e.target.name] = e.target.value;
    this.setState({ address });
  }

  render() {
    return (
      <>
        <h4>Shipping address</h4>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="street" onChange={this.handleChange} />{' '}</td>
              <td><input type="text" placeholder="apt/unit" onChange={this.handleChange} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="city" onChange={this.handleChange} />{' '}</td>
              <td><input type="text" placeholder="state" onChange={this.handleChange} />{' '}</td>
              <td><input type="text" placeholder="zip" onChange={this.handleChange} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="phone" onChange={this.handleChange} />{' '}</td>
            </tr>
          </tbody>
        </table >
      </>
    )
  }
}

export default F2;