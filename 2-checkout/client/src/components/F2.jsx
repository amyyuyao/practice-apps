import React from "react"

var F2 = ({ handleChange, checkCurrent }) => (
  <>
    <h4>Shipping address</h4>
    <table>
      <tbody>
        <tr>
          <td><input type="text" name="add_line1" placeholder="street" onChange={e => handleChange(e)} />{' '}</td>
          <td><input type="text" name="add_line2" placeholder="apt/unit" onChange={e => handleChange(e)} />{' '}</td>
        </tr>
        <tr>
          <td><input type="text" name="add_city" placeholder="city" onChange={e => handleChange(e)} />{' '}</td>
          <td><input type="text" name="add_state" placeholder="state" onChange={e => handleChange(e)} />{' '}</td>
          <td><input type="text" name="add_zip" placeholder="zip" onChange={e => handleChange(e)} />{' '}</td>
        </tr>
        <tr>
          <td><input type="text" name="add_phone" placeholder="phone" onChange={e => handleChange(e)} />{' '}</td>
        </tr>
      </tbody>
    </table >
    <button onClick={e => checkCurrent()}> Next </button>
  </>
)

export default F2;