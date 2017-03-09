/*
 * Product model
 * Detailed info http://guides.spreecommerce.org/developer/products.html#variants
 * Public API's http://guides.spreecommerce.org/api/variants.html
 */

export class Variant {
  id: string;
  name: string;
  sku: string;
  price: string;
  weight: string;
  height: string;
  width: string;
  depth: string;
  is_master: boolean;
  slug: string;
  description: string;
  track_inventory: boolean;
  display_price: string;
  options_text: string;
  total_on_hand: string;
  product_id: string;
  in_stock: boolean;
  is_backorderable: boolean;
  is_destroyed: boolean;
}
