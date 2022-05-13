var infoList = (props) => (
  <>
    <h3>Confirmation Page</h3>

      {props.data.map((entry) => (
        <ul>
          <li>name: {entry.contact_name}</li>
          <li>email: {entry.contact_email}</li>
          <li>password: {entry.contact_password}</li>
        </ul>
      ))}

  </>
)

export default infoList;