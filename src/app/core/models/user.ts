export class User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  bill_address_id: string;
  ship_address_id: string;
  payment_sources: [any];
  bill_address: string;
  ship_address: string;
}