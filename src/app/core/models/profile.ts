export interface Profile {
  firstName: string;
  lastName: string;
  birthDate: Date;
  jobTitle: string;
  photo: string;
  contacts: Contact[];
}

export interface Contact {
  type: string;
  value: string;
}
