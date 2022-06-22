import { ContactModelTypes } from 'types/models.types'

export class ContactModel {
  name = ''
  surname = ''
  email = ''
  connected = false

  constructor ({ name, surname, email, connected }: ContactModelTypes) {
    this.name = name
    this.surname = surname
    this.email = email
    this.connected = connected
  }
}
