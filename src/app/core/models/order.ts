/*
 * Order model
 * Detailed info http://guides.spreecommerce.org/developer/orders.html
 * Public API's http://guides.spreecommerce.org/api/orders.html
 */

import { LineItem } from './line_item';
import { Address } from './address';
import { Payment } from './payment';
import { Price } from './price';

export class Order {
  id: number;
  number: string;
  item_total: string;
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
  tax_total: string;
  currency: string;
  total_quantity: string;
  token: string;
  line_items: [LineItem];
  payments: [Payment];
  display_total: string;
  item_count: number;
  order_total_amount: Price;
  shipping_address: Address;
}

// NOTE: This just mimics the serializer exposed in the API
// Not sure if it is required, review it in APRIL
export class LightOrder {
  number: string;
  payment_state: string;
  completed_at: string;
  state: string;
  total: string;
  shipment_state: string;
}
