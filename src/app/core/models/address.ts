import { CState } from './state';
import { User } from './user';
/* Address model
 * Detailed info http://guides.spreecommerce.org/developer/addresses.html
 * Public API's http://guides.spreecommerce.org/api/addresses.html
 */

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
  user?: User;
}
