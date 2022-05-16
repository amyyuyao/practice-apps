import React from "react";
import axios from "axios";
import F1 from "./F1.jsx";
import F2 from "./F2.jsx";
import F3 from "./F3.jsx";
import Confirmation from "./Confirmation.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        cookie_id: document.cookie,
        contact_name: '',
        contact_email: '',
        contact_password: '',
        add_line1: '',
        add_line2: '',
        add_city: '',
        add_state: '',
        add_zip: '',
        add_phone: '',
        credit_card: '',
        credit_expiry: '',
        credit_cvv: '',
        credit_billingZip: ''
      },
      current: "checkout"
    }

    this.checkCurrent = this.checkCurrent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  checkCurrent() {
    if (this.state.current === "checkout") {
      this.setState({
        current: "f1"
      });
    } else if (this.state.current === "f1") {
      this.setState({
        current: "f2"
      });
    } else if (this.state.current === "f2") {
      this.setState({
        current: "f3"
      });
    } else if (this.state.current === "f3") {
      this.setState({
        current: "purchase"
      });
    } else if (this.state.current === "purchase") {
      this.setState({
        current: "checkout"
      });
    }
  }

  handleChange(e) {
    const { data } = this.state;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  }

  getInfos() {
    axios.get('/checkout')
      .then(result => {
        this.setState({
          data: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handlePurchase() {
    const {data} = this.state;

    axios.post('/checkout', data)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
    this.checkCurrent();
  }

  render() {
    return (
      <>
        {this.state.current === "checkout" ? <button onClick={this.checkCurrent}> checkout {JSON.stringify(document.cookie, undefined, "\t")}</button> : <></>}
        {this.state.current === "f1" ? <F1 checkCurrent={this.checkCurrent} handleChange={this.handleChange} /> : <></>}
        {this.state.current === "f2" ? <F2 checkCurrent={this.checkCurrent} handleChange={this.handleChange} /> : <></>}
        {this.state.current === "f3" ? <F3 checkCurrent={this.checkCurrent} handleChange={this.handleChange} /> : <></>}
        {this.state.current === "purchase" ? <Confirmation data={this.state.data} handlePurchase={this.handlePurchase} /> : <></>}
      </>
    );
  }
}

export default App;