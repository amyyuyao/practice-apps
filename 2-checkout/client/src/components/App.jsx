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
      checkout: "false",
      purchase: "false",
      f1: "false",
      f2: "false",
      f3: "false",
      newData: {
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
      data: []
    }
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleF1Submit = this.handleF1Submit.bind(this);
    this.handleF2Submit = this.handleF2Submit.bind(this);
    this.handleF3Submit = this.handleF3Submit.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    axios.get('/checkout')
    .then(data => {
      this.setState({
        data: data.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleCheckout() {
    this.setState({
      checkout: "true"
    })
  }

  handleF1Submit() {
    this.setState({
      f1: "true"

    })
  }

  handleF2Submit() {
    this.setState({
      f2: "true"
    })
  }

  handleF3Submit() {
    this.setState({
      f3: "true"
    })
  }

  handlePurchase() {
    const { newData } = this.state;

    axios.post('/checkout', newData)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({
      purchase: "true",
      checkout: "false"
    })
  }

  render() {
    return (
      <>
      {this.state.checkout === "false" || this.state.purchase === "true" ? <button onClick={this.handleCheckout}> checkout </button>: <></>}
      {this.state.checkout === "true" && this.state.f1 === "false" ? <><F1 data={this.state.data}/><button onClick={this.handleF1Submit}> Next </button></>: <></>}
      {this.state.f1 === "true" && this.state.f2 === "false" ? <><F2 /><button onClick={this.handleF2Submit}> Next </button></>: <></>}
      {this.state.f2 === "true" && this.state.f3 === "false" ? <><F3 /><button onClick={this.handleF3Submit}> Next </button></>: <></>}
      {this.state.f3 === "true" && this.state.checkout === "true" ? <><Confirmation data={this.state.data}/><button onClick={this.handlePurchase}> Purchase </button></>: <></>}
      </>
    );
  }
}

export default App;