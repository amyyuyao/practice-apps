import React from "react"

var F3 = ({ handleChange, checkCurrent }) => (
  <>
    <h4>Payment</h4>
    <table>
      <tbody>
        <tr>
          <td><input type="text" name="credit_card" placeholder="credit card number" onChange={e => handleChange(e)} />{' '}</td>
        </tr>
        <tr>
          <td><input type="text" name="credit_expiry" placeholder="expiry date" onChange={e => handleChange(e)} />{' '}</td>
          <td><input type="text" name="credit_cvv" placeholder="cvv" onChange={e => handleChange(e)} />{' '}</td>
        </tr>
        <tr>
          <td><input type="text" name="credit_billingZip" placeholder="billing zip code" onChange={e => handleChange(e)} />{' '}</td>
        </tr>
      </tbody>
    </table >
    <button onClick={e => checkCurrent()}> Next </button>
  </>
)

export default F3;