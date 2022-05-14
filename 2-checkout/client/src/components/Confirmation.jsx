var Confirmation = ({ data }) => (
  <>
    <h4>Confirmation Page</h4>
    <p>name: {data[0].contact_name}</p>
    <p>email: {data[0].contact_email}</p>
    <p>password: {data[0].contact_password}</p>
    {/* contact_name: '',
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
        credit_billingZip: '' */}
  </>
)

export default Confirmation;