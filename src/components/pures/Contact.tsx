import { ContactModelTypes } from 'types/models.types'

interface ContactComponentTypes extends ContactModelTypes {
  toggleStatus?: (contact: boolean) => void
}

const Contact = ({
  name,
  surname,
  email,
  connected = false,
  toggleStatus = () => {}
}: ContactComponentTypes) => {
  return (
    <div>
      <h1>Contact</h1>
      <h2>Name: {name} {surname}</h2>
      <h3>Email: {email}</h3>
      <h4>Connected: {connected ? 'Contacto En Línea' : 'Contacto No Disponible'}</h4>
      <button onClick={() => toggleStatus(!connected)}>{connected ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default Contact
