import { Price } from './price';

export class Payment {
  id: string;
  amount: Price;
  payment_method_id: string;
  slug: string;
}
