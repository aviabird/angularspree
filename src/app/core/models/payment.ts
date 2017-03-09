/*
 * Payment Model
 * Detailed info http://guides.spreecommerce.org/developer/payments.html
 * Public API's http://guides.spreecommerce.org/api/payments.html
 */

export class Payment {
  id: string;
  source_type: string;
  source_id: string;
  amount: string;
  display_amount: string;
  payment_method_id: string;
  response_code: string;
  state: string;
  avs_response: string;
  created_at: string;
  updated_at: string;
}
