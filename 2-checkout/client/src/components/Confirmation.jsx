var Confirmation = ({ data, handlePurchase}) => (
  <>
    <h4>Confirmation Page</h4>
    <p>name: {data.contact_name}</p>
    <p>email: {data.contact_email}</p>
    <p>password: {data.contact_password}</p>
    <p>street: {data.add_line1}</p>
    <p>apt/unit: {data.add_line2}</p>
    <p>city: {data.add_city}</p>
    <p>state: {data.add_state}</p>
    <p>zip code: {data.add_zip}</p>
    <p>phone: {data.add_phone}</p>
    <p>credit card number: {data.credit_card}</p>
    <p>expiry date: {data.credit_expiry}</p>
    <p>cvv: {data.credit_cvv}</p>
    <p>billing zip code: {data.credit_billingZip}</p>
    <button onClick={e => handlePurchase()}> Purchase </button>
  </>
)

export default Confirmation;