import { OptionType } from './option_type';
import { Classification } from './classification';
import { ProductProperty } from './product_property';
import { Variant } from './variant';
import { OptionValue } from './option_value';
import { Image } from './image';
import { Price } from './price';
import { Review } from './review';
import { RatingSummary } from './rating_summary';

export class Product {
  id: number;
  name: string;
  description: string;
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
  product_url?: string;
  currency: string;
  selling_price: Price;
  max_retail_price: Price;
  options: OptionValue[];
  images: Image[];
  reviews: Array<Review>;
  rating_summary: RatingSummary;
  is_orderable: boolean;
  brand: {name: string, id: number};
  discount: number;
  default_image:  { default_product_url: string};
}
