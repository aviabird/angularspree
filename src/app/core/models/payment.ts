import { Price } from './price';

export class Payment {
  id: number;
  amount: Price;
  payment_method_id: string;
  slug: string;
}
