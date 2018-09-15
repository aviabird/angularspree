import { Variant } from './variant';
import { Product } from './product';
/*
 * LineItem model
 * Detailed info http://guides.spreecommerce.org/developer/orders.html#line-items
 * Public API's http://guides.spreecommerce.org/api/line_items.html
 */

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
