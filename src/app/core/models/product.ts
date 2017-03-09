/*
 * Product model
 * Detailed info http://guides.spreecommerce.org/developer/products.html
 * Public API's http://guides.spreecommerce.org/api/products.html
 */

import { Master } from './master';
import { OptionType } from './option_type';
import { Classification } from './classification';
import { ProductProperty } from './product_property';
import { Variant } from './variant';

export class Product {
  id: string;
  name: string;
  description: string;
  price: string;
  display_price: string;
  available_on: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  shipping_category_id: string;
  taxon_ids: [string];
  has_variants: boolean;
  master: Master;
  variants: [Variant];
  option_types: [OptionType];
  product_properties: [ProductProperty];
  classifications: [Classification];
}
