class Master {
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

class ProductProperties {
  id: string;
  product_id: string;
  property_id: string;
  value: string;
  property_name: string;
}

class Classification {
  taxon_id: string;
  position: string;
}

class Variant {
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

class OptionType {
  id: string;
  name: string;
  presentation: string;
  position: string;
}

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
  product_properties: [ProductProperties];
  classifications: [Classification];
}