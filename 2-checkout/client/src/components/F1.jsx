import React from "react"

var F1 = ({checkCurrent, handleChange}) => (
      <>
        <h4>Contact information</h4>
        <table>
          <tbody>
            <tr>
              <td><input type="text" name="contact_name" placeholder="name" onChange={e => handleChange(e)} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" name="contact_email" placeholder="email" onChange={e => handleChange(e)} />{' '}</td>
            </tr>
            <tr>
              <td><input type="text" name="contact_password" placeholder="password" onChange={e => handleChange(e)} />{' '}</td>
            </tr>
          </tbody>
        </table >
        <button onClick={e => checkCurrent()}> Next </button>
      </>
)

export default F1;