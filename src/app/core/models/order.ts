export class LightOrder {
  number: string;
  payment_state: string;
  completed_at: string;
  state: string;
  total: string;
  shipment_state: string;
}

export class Order {
  id: string;
  number: string;
  item_total: string;
  total: string;
  ship_total: string;
  state: string;
  adjustment_total: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  completed_at: string;
  payment_total: string;
  shipment_state: string;
  payment_state: string;
  email: string;
  special_instructions: string;
  channel: string;
  included_tax_total: string;
  additional_tax_total: string;
  display_included_tax_total: string;
  display_additional_tax_total: string;
  tax_total: string;
  currency: string;
  considered_risky: boolean;
  canceler_id: string;
  total_quantity: string;
  token: string;
  bill_address: [BillAddress];
  ship_address: [ShipAddress];
  line_items: [LineItem];
  payments: [Payment];
}

class BillAddress {
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

class ShipAddress {
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

class LineItem {
  id: string;
  quantity: string;
  price: string;
  variant_id: string;
  single_display_amount: string;
  display_amount: string;
  total: string;
}

class Payment {
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