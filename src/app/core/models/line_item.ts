import { Variant } from './variant';
/*
 * LineItem model
 * Detailed info http://guides.spreecommerce.org/developer/orders.html#line-items
 * Public API's http://guides.spreecommerce.org/api/line_items.html
 */

export class LineItem {
  id: number;
  quantity: number;
  price: number;
  single_display_amount: number;
  total: number;
  display_amount: number;
  variant_id: number;
  variant: Variant;

}
