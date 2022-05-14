import React from "react"

class F3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: {
        credit_card: '',
        credit_expiry: '',
        credit_cvv: '',
        credit_billingZip: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { credit } = this.state;
    credit[e.target.name] = e.target.value;
    this.setState({ credit });
  }

  render() {
    return (
      <>
        <h4>Payment</h4>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="credit card number" onChange={this.handleChange} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="expiry date" onChange={this.handleChange} />{' '}</td>
              <td><input type="text" placeholder="cvv" onChange={this.handleChange} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" placeholder="billing zip code" onChange={this.handleChange} />{' '}</td>
            </tr>
          </tbody>
        </table >
      </>
    )
  }
}

export default F3;