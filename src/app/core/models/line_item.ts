/* 
 * LineItem model
 * Detailed info http://guides.spreecommerce.org/developer/orders.html#line-items
 * Public API's http://guides.spreecommerce.org/api/line_items.html
 */

export class LineItem {
  id: string;
  quantity: string;
  price: string;
  variant_id: string;
  single_display_amount: string;
  display_amount: string;
  total: string;
}