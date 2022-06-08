import Contact from 'components/pures/Contact'
import { ContactModel } from 'models/contact.model'
import { useState } from 'react'
import { ContactModelTypes } from 'types/models.types'

const defaultContact: ContactModelTypes = new ContactModel({
  name: 'Esteban',
  surname: 'Quito',
  email: 'estebanquito@mail.com',
  connected: false
})

const ContactContainer = () => {
  const [contact, setContact] = useState(defaultContact)
  const handleStatus = (status: boolean) => setContact({ ...contact, connected: status })
  return (
    <div>
      <Contact {...contact} toggleStatus={handleStatus} />
    </div>
  )
}

export default ContactContainer
