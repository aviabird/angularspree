/*
 * Product model
 * Detailed info http://guides.spreecommerce.org/developer/products.html
 * Public API's http://guides.spreecommerce.org/api/products.html
 */

import { OptionType } from './option_type';
import { Classification } from './classification';
import { ProductProperty } from './product_property';
import { Variant } from './variant';
import { OptionValue } from './option_value';
import { Image } from './image';

export class Product {
  id: number;
  name: string;
  description: string;
  price: string;
  display_price: string;
  available_on: string;
  slug: string;
  is_favorited_by_current_user: boolean;
  meta_description: string;
  meta_keywords: string;
  shipping_category_id: number;
  taxon_ids: number[];
  total_on_hand: number;
  has_variants: boolean;
  master: Variant;
  variants: Variant[];
  option_types: OptionType[];
  product_properties: ProductProperty[];
  classifications: Classification[];
  avg_rating: number;
  reviews_count: number;
  product_url?: string;
  currency: string;
  selling_price: Object;
  max_retail_price: Object;
  options: OptionValue[];
  images: Image[];

}
