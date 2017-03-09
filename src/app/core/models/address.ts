/* Address model
 * Detailed info http://guides.spreecommerce.org/developer/addresses.html
 * Public API's http://guides.spreecommerce.org/api/addresses.html
 */

export class Address {
  id: string;
  firstname: string;
  lastname: string;
  full_name: string;
  address1: string;
  address2: string;
  city: string;
  zipcode: string;
  phone: string;
  company: string;
  alternative_phone: string;
  country_id: string;
  state_id: string;
  state_name: string;
  state_text: string;
}
