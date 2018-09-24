import { CState } from './state';
import { Country } from './country';


export class Address {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zip_code: string;
  phone: string;
  company: string;
  alternative_phone: string;
  country_id: string;
  state_id: string;
  state_name: string;
  state_text: string;
  state?: CState;
  country: Country;
}
