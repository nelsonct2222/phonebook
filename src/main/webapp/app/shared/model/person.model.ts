import { Moment } from 'moment';

export interface IPerson {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  company?: string;
  dob?: Moment;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

export class Person implements IPerson {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public middleName?: string,
    public phone?: string,
    public company?: string,
    public dob?: Moment,
    public addressLine1?: string,
    public addressLine2?: string,
    public city?: string,
    public postalCode?: string,
    public country?: string
  ) {}
}
