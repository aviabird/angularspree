import { Image } from './image';
import { OptionValue } from './option_value';
/*
 * Product model
 * Detailed info http://guides.spreecommerce.org/developer/products.html#variants
 * Public API's http://guides.spreecommerce.org/api/variants.html
 */

export class Variant {
  id: number;
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
  cost_price: string;
  option_values: OptionValue[];
  total_on_hand: number;
  display_price: string;
  options_text: string;
  in_stock: boolean;
  is_backorderable: boolean;
  is_destroyed: boolean;
  is_orderable: boolean;
  images: Image[];
}
