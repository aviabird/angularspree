import { Variant } from './variant';
import { Product } from './product';

export class LineItem {
  id: number;
  quantity: number;
  unit_price: Object;
  single_display_amount: number;
  total_price: number;
  display_amount: number;
  variant_id: number;
  variant: Variant;
  product: Product;
}
