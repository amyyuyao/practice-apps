import React from "react";
import F1 from "./F1.jsx";
import infoList from "./infoList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkout: "false",
      confirm: "false",
      purchase: "false",
      // f1: "false",
      // f2: "false",
      // f3: "false",
      data: []
    }
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    this.setState({
      checkout: "true"
    })
  }

  handleConfirm() {
    this.setState({
      confirm: "true"
    })
  }

  handlePurchase() {
    this.setState({
      purchase: "true"
    })
  }

  render() {
    return (
      <>{this.state.checkout === "true" ? (
          <>
            <F1 />
            <F1 />
            <F1 />
            {this.state.confirm === "true" ? (
              <>
                <infoList />
                <button> Purchase </button>
              </>
            ) : (<></>)}
          </>
        ) : (
          <>
            <p>Ready to checkout?</p>
            <p>
              <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
            </p>
            <div>
              <button onClick={this.handleCheckout}>checkout</button>
            </div>
          </>
        )

      }</>
    );
  }
}

export default App;