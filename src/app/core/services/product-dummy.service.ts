// import { Observable } from 'rxjs/Observable';
// import { Injectable } from '@angular/core';
// import { Product } from '../models/product';

// @Injectable()
// export class ProductDummyService {
//   constructor() { }

//   getProduct(slug: string): Product {
//     return Object.assign(new Product, {
//       'id': 1,
//       'name': 'Ruby on Rails Tote',
//       'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//       'price': '15.99',
//       'display_price': '$15.99',
//       'available_on': '2017-03-08T05:32:34.364Z',
//       'slug': 'ruby-on-rails-tote',
//       'meta_description': null,
//       'meta_keywords': null,
//       'shipping_category_id': 1,
//       'taxon_ids': [
//         3,
//         11
//       ],
//       'total_on_hand': 5,
//       'master': {
//         'id': 1,
//         'name': 'Ruby on Rails Tote',
//         'sku': 'ROR-00011',
//         'price': '15.99',
//         'weight': '0.0',
//         'height': null,
//         'width': null,
//         'depth': null,
//         'is_master': true,
//         'slug': 'ruby-on-rails-tote',
//         'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//         'track_inventory': true,
//         'cost_price': '17.0',
//         'option_values': [],
//         'images': [
//           {
//             'id': 21,
//             'position': 1,
//             'attachment_content_type': 'image/jpeg',
//             'attachment_file_name': 'ror_tote.jpeg',
//             'type': 'Spree::Image',
//             'attachment_updated_at': '2017-03-08T05:33:16.633Z',
//             'attachment_width': 360,
//             'attachment_height': 360,
//             'alt': null,
//             'viewable_type': 'Spree::Variant',
//             'viewable_id': 1,
//             'mini_url': '/spree/products/21/mini/ror_tote.jpeg?1488951196',
//             'small_url': '/spree/products/21/small/ror_tote.jpeg?1488951196',
//             'product_url': '/spree/products/21/product/ror_tote.jpeg?1488951196',
//             'large_url': '/spree/products/21/large/ror_tote.jpeg?1488951196'
//           },
//           {
//             'id': 22,
//             'position': 2,
//             'attachment_content_type': 'image/jpeg',
//             'attachment_file_name': 'ror_tote_back.jpeg',
//             'type': 'Spree::Image',
//             'attachment_updated_at': '2017-03-08T05:33:17.056Z',
//             'attachment_width': 360,
//             'attachment_height': 360,
//             'alt': null,
//             'viewable_type': 'Spree::Variant',
//             'viewable_id': 1,
//             'mini_url': '/spree/products/22/mini/ror_tote_back.jpeg?1488951197',
//             'small_url': '/spree/products/22/small/ror_tote_back.jpeg?1488951197',
//             'product_url': '/spree/products/22/product/ror_tote_back.jpeg?1488951197',
//             'large_url': '/spree/products/22/large/ror_tote_back.jpeg?1488951197'
//           }
//         ],
//         'display_price': '$15.99',
//         'options_text': '',
//         'in_stock': true,
//         'is_backorderable': true,
//         'total_on_hand': 5,
//         'is_destroyed': false
//       },
//       'variants': [],
//       'option_types': [],
//       'product_properties': [
//         {
//           'id': 25,
//           'product_id': 1,
//           'property_id': 9,
//           'value': 'Tote',
//           'property_name': 'Type'
//         },
//         {
//           'id': 26,
//           'product_id': 1,
//           'property_id': 10,
//           'value': '15" x 18" x 6"',
//           'property_name': 'Size'
//         },
//         {
//           'id': 27,
//           'product_id': 1,
//           'property_id': 11,
//           'value': 'Canvas',
//           'property_name': 'Material'
//         }
//       ],
//       'classifications': [
//         {
//           'taxon_id': 3,
//           'position': 1,
//           'taxon': {
//             'id': 3,
//             'name': 'Bags',
//             'pretty_name': 'Categories -> Bags',
//             'permalink': 'categories/bags',
//             'parent_id': 1,
//             'taxonomy_id': 1,
//             'taxons': []
//           }
//         },
//         {
//           'taxon_id': 11,
//           'position': 1,
//           'taxon': {
//             'id': 11,
//             'name': 'Rails',
//             'pretty_name': 'Brand -> Rails',
//             'permalink': 'brand/rails',
//             'parent_id': 2,
//             'taxonomy_id': 2,
//             'taxons': []
//           }
//         }
//       ],
//       'has_variants': false
//     });
//   }

//   getTaxonomies(): any {
//     const taxonomies = {
//       'taxonomies': [
//         {
//           'id': 1,
//           'name': 'Categories',
//           'root': {
//             'id': 1,
//             'name': 'Categories',
//             'pretty_name': 'Categories',
//             'permalink': 'categories',
//             'parent_id': null,
//             'taxonomy_id': 1,
//             'taxons': [
//               {
//                 'id': 3,
//                 'name': 'Bags',
//                 'pretty_name': 'Categories -> Bags',
//                 'permalink': 'categories/bags',
//                 'parent_id': 1,
//                 'taxonomy_id': 1
//               },
//               {
//                 'id': 4,
//                 'name': 'Mugs',
//                 'pretty_name': 'Categories -> Mugs',
//                 'permalink': 'categories/mugs',
//                 'parent_id': 1,
//                 'taxonomy_id': 1
//               },
//               {
//                 'id': 5,
//                 'name': 'Clothing',
//                 'pretty_name': 'Categories -> Clothing',
//                 'permalink': 'categories/clothing',
//                 'parent_id': 1,
//                 'taxonomy_id': 1
//               }
//             ]
//           }
//         },
//         {
//           'id': 2,
//           'name': 'Brand',
//           'root': {
//             'id': 2,
//             'name': 'Brand',
//             'pretty_name': 'Brand',
//             'permalink': 'brand',
//             'parent_id': null,
//             'taxonomy_id': 2,
//             'taxons': [
//               {
//                 'id': 8,
//                 'name': 'Ruby',
//                 'pretty_name': 'Brand -> Ruby',
//                 'permalink': 'brand/ruby',
//                 'parent_id': 2,
//                 'taxonomy_id': 2
//               },
//               {
//                 'id': 9,
//                 'name': 'Apache',
//                 'pretty_name': 'Brand -> Apache',
//                 'permalink': 'brand/apache',
//                 'parent_id': 2,
//                 'taxonomy_id': 2
//               },
//               {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2
//               },
//               {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2
//               }
//             ]
//           }
//         }
//       ],
//       'count': 2,
//       'current_page': 1,
//       'pages': 1
//     };

//     return Observable.of(taxonomies);
//   }

//   getProducts(): any {
//     console.log('in dummy service.');

//     const data = {
//       'products': [
//         {
//           'id': 1,
//           'name': 'Ruby on Rails Tote',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '15.99',
//           'display_price': '$15.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-on-rails-tote',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             3,
//             11
//           ],
//           'total_on_hand': 5,
//           'master': {
//             'id': 1,
//             'name': 'Ruby on Rails Tote',
//             'sku': 'ROR-00011',
//             'price': '15.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-on-rails-tote',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 21,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_tote.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:16.633Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 1,
//                 'mini_url': '/spree/products/21/mini/ror_tote.jpeg?1488951196',
//                 'small_url': '/spree/products/21/small/ror_tote.jpeg?1488951196',
//                 'product_url': '/spree/products/21/product/ror_tote.jpeg?1488951196',
//                 'large_url': '/spree/products/21/large/ror_tote.jpeg?1488951196'
//               },
//               {
//                 'id': 22,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_tote_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:17.056Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 1,
//                 'mini_url': '/spree/products/22/mini/ror_tote_back.jpeg?1488951197',
//                 'small_url': '/spree/products/22/small/ror_tote_back.jpeg?1488951197',
//                 'product_url': '/spree/products/22/product/ror_tote_back.jpeg?1488951197',
//                 'large_url': '/spree/products/22/large/ror_tote_back.jpeg?1488951197'
//               }
//             ],
//             'display_price': '$15.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 5,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 25,
//               'product_id': 1,
//               'property_id': 9,
//               'value': 'Tote',
//               'property_name': 'Type'
//             },
//             {
//               'id': 26,
//               'product_id': 1,
//               'property_id': 10,
//               'value': '15" x 18" x 6"',
//               'property_name': 'Size'
//             },
//             {
//               'id': 27,
//               'product_id': 1,
//               'property_id': 11,
//               'value': 'Canvas',
//               'property_name': 'Material'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 3,
//               'position': 1,
//               'taxon': {
//                 'id': 3,
//                 'name': 'Bags',
//                 'pretty_name': 'Categories -> Bags',
//                 'permalink': 'categories/bags',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 11,
//               'position': 1,
//               'taxon': {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 2,
//           'name': 'Ruby on Rails Bag',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '22.99',
//           'display_price': '$22.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-on-rails-bag',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             3,
//             11
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 2,
//             'name': 'Ruby on Rails Bag',
//             'sku': 'ROR-00012',
//             'price': '22.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-on-rails-bag',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '21.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 23,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_bag.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:17.393Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 2,
//                 'mini_url': '/spree/products/23/mini/ror_bag.jpeg?1488951197',
//                 'small_url': '/spree/products/23/small/ror_bag.jpeg?1488951197',
//                 'product_url': '/spree/products/23/product/ror_bag.jpeg?1488951197',
//                 'large_url': '/spree/products/23/large/ror_bag.jpeg?1488951197'
//               }
//             ],
//             'display_price': '$22.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 28,
//               'product_id': 2,
//               'property_id': 9,
//               'value': 'Messenger',
//               'property_name': 'Type'
//             },
//             {
//               'id': 29,
//               'product_id': 2,
//               'property_id': 10,
//               'value': '14 1/2" x 12" x 5"',
//               'property_name': 'Size'
//             },
//             {
//               'id': 30,
//               'product_id': 2,
//               'property_id': 11,
//               'value': '600 Denier Polyester',
//               'property_name': 'Material'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 3,
//               'position': 2,
//               'taxon': {
//                 'id': 3,
//                 'name': 'Bags',
//                 'pretty_name': 'Categories -> Bags',
//                 'permalink': 'categories/bags',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 11,
//               'position': 2,
//               'taxon': {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 3,
//           'name': 'Ruby on Rails Baseball Jersey',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-on-rails-baseball-jersey',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             7,
//             11
//           ],
//           'total_on_hand': 110,
//           'master': {
//             'id': 3,
//             'name': 'Ruby on Rails Baseball Jersey',
//             'sku': 'ROR-001',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-on-rails-baseball-jersey',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 24,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_baseball.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:17.706Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 3,
//                 'mini_url': '/spree/products/24/mini/ror_baseball.jpeg?1488951197',
//                 'small_url': '/spree/products/24/small/ror_baseball.jpeg?1488951197',
//                 'product_url': '/spree/products/24/product/ror_baseball.jpeg?1488951197',
//                 'large_url': '/spree/products/24/large/ror_baseball.jpeg?1488951197'
//               },
//               {
//                 'id': 25,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_baseball_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:18.027Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 3,
//                 'mini_url': '/spree/products/25/mini/ror_baseball_back.jpeg?1488951198',
//                 'small_url': '/spree/products/25/small/ror_baseball_back.jpeg?1488951198',
//                 'product_url': '/spree/products/25/product/ror_baseball_back.jpeg?1488951198',
//                 'large_url': '/spree/products/25/large/ror_baseball_back.jpeg?1488951198'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [
//             {
//               'id': 17,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00001',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 1,
//                   'name': 'Small',
//                   'presentation': 'S',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                                 {
//                   'id': 1,
//                   'name': 'medium',
//                   'presentation': 'S',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 5,
//                   'name': 'Red',
//                   'presentation': 'Red',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 1,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_red.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:08.907Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 17,
//                   'mini_url': '/spree/products/1/mini/ror_baseball_jersey_red.png?1488951188',
//                   'small_url': '/spree/products/1/small/ror_baseball_jersey_red.png?1488951188',
//                   'product_url': '/spree/products/1/product/ror_baseball_jersey_red.png?1488951188',
//                   'large_url': '/spree/products/1/large/ror_baseball_jersey_red.png?1488951188'
//                 },
//                 {
//                   'id': 2,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_red.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:09.922Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 17,
//                   'mini_url': '/spree/products/2/mini/ror_baseball_jersey_back_red.png?1488951189',
//                   'small_url': '/spree/products/2/small/ror_baseball_jersey_back_red.png?1488951189',
//                   'product_url': '/spree/products/2/product/ror_baseball_jersey_back_red.png?1488951189',
//                   'large_url': '/spree/products/2/large/ror_baseball_jersey_back_red.png?1488951189'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: S, Color: Red',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 18,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00002',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 1,
//                   'name': 'Small',
//                   'presentation': 'S',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 7,
//                   'name': 'Blue',
//                   'presentation': 'Blue',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 3,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_blue.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:10.261Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 18,
//                   'mini_url': '/spree/products/3/mini/ror_baseball_jersey_blue.png?1488951190',
//                   'small_url': '/spree/products/3/small/ror_baseball_jersey_blue.png?1488951190',
//                   'product_url': '/spree/products/3/product/ror_baseball_jersey_blue.png?1488951190',
//                   'large_url': '/spree/products/3/large/ror_baseball_jersey_blue.png?1488951190'
//                 },
//                 {
//                   'id': 4,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_blue.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:10.608Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 18,
//                   'mini_url': '/spree/products/4/mini/ror_baseball_jersey_back_blue.png?1488951190',
//                   'small_url': '/spree/products/4/small/ror_baseball_jersey_back_blue.png?1488951190',
//                   'product_url': '/spree/products/4/product/ror_baseball_jersey_back_blue.png?1488951190',
//                   'large_url': '/spree/products/4/large/ror_baseball_jersey_back_blue.png?1488951190'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: S, Color: Blue',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 19,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00003',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 1,
//                   'name': 'Small',
//                   'presentation': 'S',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 6,
//                   'name': 'Green',
//                   'presentation': 'Green',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 5,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:10.947Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 19,
//                   'mini_url': '/spree/products/5/mini/ror_baseball_jersey_green.png?1488951190',
//                   'small_url': '/spree/products/5/small/ror_baseball_jersey_green.png?1488951190',
//                   'product_url': '/spree/products/5/product/ror_baseball_jersey_green.png?1488951190',
//                   'large_url': '/spree/products/5/large/ror_baseball_jersey_green.png?1488951190'
//                 },
//                 {
//                   'id': 6,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:11.541Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 19,
//                   'mini_url': '/spree/products/6/mini/ror_baseball_jersey_back_green.png?1488951191',
//                   'small_url': '/spree/products/6/small/ror_baseball_jersey_back_green.png?1488951191',
//                   'product_url': '/spree/products/6/product/ror_baseball_jersey_back_green.png?1488951191',
//                   'large_url': '/spree/products/6/large/ror_baseball_jersey_back_green.png?1488951191'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: S, Color: Green',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 20,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00004',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 2,
//                   'name': 'Medium',
//                   'presentation': 'M',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 5,
//                   'name': 'Red',
//                   'presentation': 'Red',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 7,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_red.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:11.907Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 20,
//                   'mini_url': '/spree/products/7/mini/ror_baseball_jersey_red.png?1488951191',
//                   'small_url': '/spree/products/7/small/ror_baseball_jersey_red.png?1488951191',
//                   'product_url': '/spree/products/7/product/ror_baseball_jersey_red.png?1488951191',
//                   'large_url': '/spree/products/7/large/ror_baseball_jersey_red.png?1488951191'
//                 },
//                 {
//                   'id': 8,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_red.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:12.237Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 20,
//                   'mini_url': '/spree/products/8/mini/ror_baseball_jersey_back_red.png?1488951192',
//                   'small_url': '/spree/products/8/small/ror_baseball_jersey_back_red.png?1488951192',
//                   'product_url': '/spree/products/8/product/ror_baseball_jersey_back_red.png?1488951192',
//                   'large_url': '/spree/products/8/large/ror_baseball_jersey_back_red.png?1488951192'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: M, Color: Red',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 21,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00005',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 2,
//                   'name': 'Medium',
//                   'presentation': 'M',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 7,
//                   'name': 'Blue',
//                   'presentation': 'Blue',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 9,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_blue.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:12.585Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 21,
//                   'mini_url': '/spree/products/9/mini/ror_baseball_jersey_blue.png?1488951192',
//                   'small_url': '/spree/products/9/small/ror_baseball_jersey_blue.png?1488951192',
//                   'product_url': '/spree/products/9/product/ror_baseball_jersey_blue.png?1488951192',
//                   'large_url': '/spree/products/9/large/ror_baseball_jersey_blue.png?1488951192'
//                 },
//                 {
//                   'id': 10,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_blue.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:12.934Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 21,
//                   'mini_url': '/spree/products/10/mini/ror_baseball_jersey_back_blue.png?1488951192',
//                   'small_url': '/spree/products/10/small/ror_baseball_jersey_back_blue.png?1488951192',
//                   'product_url': '/spree/products/10/product/ror_baseball_jersey_back_blue.png?1488951192',
//                   'large_url': '/spree/products/10/large/ror_baseball_jersey_back_blue.png?1488951192'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: M, Color: Blue',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 22,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00006',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 2,
//                   'name': 'Medium',
//                   'presentation': 'M',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 6,
//                   'name': 'Green',
//                   'presentation': 'Green',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 11,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:13.271Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 22,
//                   'mini_url': '/spree/products/11/mini/ror_baseball_jersey_green.png?1488951193',
//                   'small_url': '/spree/products/11/small/ror_baseball_jersey_green.png?1488951193',
//                   'product_url': '/spree/products/11/product/ror_baseball_jersey_green.png?1488951193',
//                   'large_url': '/spree/products/11/large/ror_baseball_jersey_green.png?1488951193'
//                 },
//                 {
//                   'id': 12,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:13.634Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 22,
//                   'mini_url': '/spree/products/12/mini/ror_baseball_jersey_back_green.png?1488951193',
//                   'small_url': '/spree/products/12/small/ror_baseball_jersey_back_green.png?1488951193',
//                   'product_url': '/spree/products/12/product/ror_baseball_jersey_back_green.png?1488951193',
//                   'large_url': '/spree/products/12/large/ror_baseball_jersey_back_green.png?1488951193'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: M, Color: Green',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 23,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00007',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 3,
//                   'name': 'Large',
//                   'presentation': 'L',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 5,
//                   'name': 'Red',
//                   'presentation': 'Red',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 13,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_red.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:13.969Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 23,
//                   'mini_url': '/spree/products/13/mini/ror_baseball_jersey_red.png?1488951193',
//                   'small_url': '/spree/products/13/small/ror_baseball_jersey_red.png?1488951193',
//                   'product_url': '/spree/products/13/product/ror_baseball_jersey_red.png?1488951193',
//                   'large_url': '/spree/products/13/large/ror_baseball_jersey_red.png?1488951193'
//                 },
//                 {
//                   'id': 14,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_red.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:14.296Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 23,
//                   'mini_url': '/spree/products/14/mini/ror_baseball_jersey_back_red.png?1488951194',
//                   'small_url': '/spree/products/14/small/ror_baseball_jersey_back_red.png?1488951194',
//                   'product_url': '/spree/products/14/product/ror_baseball_jersey_back_red.png?1488951194',
//                   'large_url': '/spree/products/14/large/ror_baseball_jersey_back_red.png?1488951194'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: L, Color: Red',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 24,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00008',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 3,
//                   'name': 'Large',
//                   'presentation': 'L',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 7,
//                   'name': 'Blue',
//                   'presentation': 'Blue',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 15,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_blue.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:14.622Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 24,
//                   'mini_url': '/spree/products/15/mini/ror_baseball_jersey_blue.png?1488951194',
//                   'small_url': '/spree/products/15/small/ror_baseball_jersey_blue.png?1488951194',
//                   'product_url': '/spree/products/15/product/ror_baseball_jersey_blue.png?1488951194',
//                   'large_url': '/spree/products/15/large/ror_baseball_jersey_blue.png?1488951194'
//                 },
//                 {
//                   'id': 16,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_blue.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:14.949Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 24,
//                   'mini_url': '/spree/products/16/mini/ror_baseball_jersey_back_blue.png?1488951194',
//                   'small_url': '/spree/products/16/small/ror_baseball_jersey_back_blue.png?1488951194',
//                   'product_url': '/spree/products/16/product/ror_baseball_jersey_back_blue.png?1488951194',
//                   'large_url': '/spree/products/16/large/ror_baseball_jersey_back_blue.png?1488951194'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: L, Color: Blue',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 25,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00009',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 3,
//                   'name': 'Large',
//                   'presentation': 'L',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 6,
//                   'name': 'Green',
//                   'presentation': 'Green',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 17,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:15.318Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 25,
//                   'mini_url': '/spree/products/17/mini/ror_baseball_jersey_green.png?1488951195',
//                   'small_url': '/spree/products/17/small/ror_baseball_jersey_green.png?1488951195',
//                   'product_url': '/spree/products/17/product/ror_baseball_jersey_green.png?1488951195',
//                   'large_url': '/spree/products/17/large/ror_baseball_jersey_green.png?1488951195'
//                 },
//                 {
//                   'id': 18,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:15.646Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 25,
//                   'mini_url': '/spree/products/18/mini/ror_baseball_jersey_back_green.png?1488951195',
//                   'small_url': '/spree/products/18/small/ror_baseball_jersey_back_green.png?1488951195',
//                   'product_url': '/spree/products/18/product/ror_baseball_jersey_back_green.png?1488951195',
//                   'large_url': '/spree/products/18/large/ror_baseball_jersey_back_green.png?1488951195'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: L, Color: Green',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             },
//             {
//               'id': 26,
//               'name': 'Ruby on Rails Baseball Jersey',
//               'sku': 'ROR-00010',
//               'price': '19.99',
//               'weight': '0.0',
//               'height': null,
//               'width': null,
//               'depth': null,
//               'is_master': false,
//               'slug': 'ruby-on-rails-baseball-jersey',
//               'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//               'track_inventory': true,
//               'cost_price': '17.0',
//               'option_values': [
//                 {
//                   'id': 4,
//                   'name': 'Extra Large',
//                   'presentation': 'XL',
//                   'option_type_name': 'tshirt-size',
//                   'option_type_id': 1,
//                   'option_type_presentation': 'Size'
//                 },
//                 {
//                   'id': 6,
//                   'name': 'Green',
//                   'presentation': 'Green',
//                   'option_type_name': 'tshirt-color',
//                   'option_type_id': 2,
//                   'option_type_presentation': 'Color'
//                 }
//               ],
//               'images': [
//                 {
//                   'id': 19,
//                   'position': 1,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:15.972Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 26,
//                   'mini_url': '/spree/products/19/mini/ror_baseball_jersey_green.png?1488951195',
//                   'small_url': '/spree/products/19/small/ror_baseball_jersey_green.png?1488951195',
//                   'product_url': '/spree/products/19/product/ror_baseball_jersey_green.png?1488951195',
//                   'large_url': '/spree/products/19/large/ror_baseball_jersey_green.png?1488951195'
//                 },
//                 {
//                   'id': 20,
//                   'position': 2,
//                   'attachment_content_type': 'image/png',
//                   'attachment_file_name': 'ror_baseball_jersey_back_green.png',
//                   'type': 'Spree::Image',
//                   'attachment_updated_at': '2017-03-08T05:33:16.300Z',
//                   'attachment_width': 240,
//                   'attachment_height': 240,
//                   'alt': null,
//                   'viewable_type': 'Spree::Variant',
//                   'viewable_id': 26,
//                   'mini_url': '/spree/products/20/mini/ror_baseball_jersey_back_green.png?1488951196',
//                   'small_url': '/spree/products/20/small/ror_baseball_jersey_back_green.png?1488951196',
//                   'product_url': '/spree/products/20/product/ror_baseball_jersey_back_green.png?1488951196',
//                   'large_url': '/spree/products/20/large/ror_baseball_jersey_back_green.png?1488951196'
//                 }
//               ],
//               'display_price': '$19.99',
//               'options_text': 'Size: XL, Color: Green',
//               'in_stock': true,
//               'is_backorderable': true,
//               'total_on_hand': 10,
//               'is_destroyed': false
//             }
//           ],
//           'option_types': [
//             {
//               'id': 1,
//               'name': 'tshirt-size',
//               'presentation': 'Size',
//               'position': 1
//             },
//             {
//               'id': 2,
//               'name': 'tshirt-color',
//               'presentation': 'Color',
//               'position': 2
//             }
//           ],
//           'product_properties': [
//             {
//               'id': 1,
//               'product_id': 3,
//               'property_id': 1,
//               'value': 'Wilson',
//               'property_name': 'Manufacturer'
//             },
//             {
//               'id': 2,
//               'product_id': 3,
//               'property_id': 2,
//               'value': 'Wannabe Sports',
//               'property_name': 'Brand'
//             },
//             {
//               'id': 3,
//               'product_id': 3,
//               'property_id': 3,
//               'value': 'JK1002',
//               'property_name': 'Model'
//             },
//             {
//               'id': 4,
//               'product_id': 3,
//               'property_id': 4,
//               'value': 'Baseball Jersey',
//               'property_name': 'Shirt Type'
//             },
//             {
//               'id': 5,
//               'product_id': 3,
//               'property_id': 5,
//               'value': 'Long',
//               'property_name': 'Sleeve Type'
//             },
//             {
//               'id': 6,
//               'product_id': 3,
//               'property_id': 6,
//               'value': '100% cotton',
//               'property_name': 'Made from'
//             },
//             {
//               'id': 7,
//               'product_id': 3,
//               'property_id': 7,
//               'value': 'Loose',
//               'property_name': 'Fit'
//             },
//             {
//               'id': 8,
//               'product_id': 3,
//               'property_id': 8,
//               'value': 'Men\'s',
//               'property_name': 'Gender'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 7,
//               'position': 1,
//               'taxon': {
//                 'id': 7,
//                 'name': 'T-Shirts',
//                 'pretty_name': 'Categories -> Clothing -> T-Shirts',
//                 'permalink': 'categories/clothing/t-shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 11,
//               'position': 5,
//               'taxon': {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': true
//         },
//         {
//           'id': 4,
//           'name': 'Ruby on Rails Jr. Spaghetti',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-on-rails-jr-spaghetti',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             6,
//             11
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 4,
//             'name': 'Ruby on Rails Jr. Spaghetti',
//             'sku': 'ROR-00013',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-on-rails-jr-spaghetti',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 26,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_jr_spaghetti.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:18.326Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 4,
//                 'mini_url': '/spree/products/26/mini/ror_jr_spaghetti.jpeg?1488951198',
//                 'small_url': '/spree/products/26/small/ror_jr_spaghetti.jpeg?1488951198',
//                 'product_url': '/spree/products/26/product/ror_jr_spaghetti.jpeg?1488951198',
//                 'large_url': '/spree/products/26/large/ror_jr_spaghetti.jpeg?1488951198'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 9,
//               'product_id': 4,
//               'property_id': 1,
//               'value': 'Jerseys',
//               'property_name': 'Manufacturer'
//             },
//             {
//               'id': 10,
//               'product_id': 4,
//               'property_id': 2,
//               'value': 'Resiliance',
//               'property_name': 'Brand'
//             },
//             {
//               'id': 11,
//               'product_id': 4,
//               'property_id': 3,
//               'value': 'TL174',
//               'property_name': 'Model'
//             },
//             {
//               'id': 12,
//               'product_id': 4,
//               'property_id': 4,
//               'value': 'Jr. Spaghetti T',
//               'property_name': 'Shirt Type'
//             },
//             {
//               'id': 13,
//               'product_id': 4,
//               'property_id': 5,
//               'value': 'None',
//               'property_name': 'Sleeve Type'
//             },
//             {
//               'id': 14,
//               'product_id': 4,
//               'property_id': 6,
//               'value': '90% Cotton, 10% Nylon',
//               'property_name': 'Made from'
//             },
//             {
//               'id': 15,
//               'product_id': 4,
//               'property_id': 7,
//               'value': 'Form',
//               'property_name': 'Fit'
//             },
//             {
//               'id': 16,
//               'product_id': 4,
//               'property_id': 8,
//               'value': 'Women\'s',
//               'property_name': 'Gender'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 6,
//               'position': 1,
//               'taxon': {
//                 'id': 6,
//                 'name': 'Shirts',
//                 'pretty_name': 'Categories -> Clothing -> Shirts',
//                 'permalink': 'categories/clothing/shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 11,
//               'position': 6,
//               'taxon': {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 5,
//           'name': 'Ruby on Rails Ringer T-Shirt',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-on-rails-ringer-t-shirt',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             7,
//             11
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 5,
//             'name': 'Ruby on Rails Ringer T-Shirt',
//             'sku': 'ROR-00015',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-on-rails-ringer-t-shirt',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 29,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_ringer.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:19.291Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 5,
//                 'mini_url': '/spree/products/29/mini/ror_ringer.jpeg?1488951199',
//                 'small_url': '/spree/products/29/small/ror_ringer.jpeg?1488951199',
//                 'product_url': '/spree/products/29/product/ror_ringer.jpeg?1488951199',
//                 'large_url': '/spree/products/29/large/ror_ringer.jpeg?1488951199'
//               },
//               {
//                 'id': 30,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_ringer_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:19.643Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 5,
//                 'mini_url': '/spree/products/30/mini/ror_ringer_back.jpeg?1488951199',
//                 'small_url': '/spree/products/30/small/ror_ringer_back.jpeg?1488951199',
//                 'product_url': '/spree/products/30/product/ror_ringer_back.jpeg?1488951199',
//                 'large_url': '/spree/products/30/large/ror_ringer_back.jpeg?1488951199'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 17,
//               'product_id': 5,
//               'property_id': 1,
//               'value': 'Jerseys',
//               'property_name': 'Manufacturer'
//             },
//             {
//               'id': 18,
//               'product_id': 5,
//               'property_id': 2,
//               'value': 'Conditioned',
//               'property_name': 'Brand'
//             },
//             {
//               'id': 19,
//               'product_id': 5,
//               'property_id': 3,
//               'value': 'TL9002',
//               'property_name': 'Model'
//             },
//             {
//               'id': 20,
//               'product_id': 5,
//               'property_id': 4,
//               'value': 'Ringer T',
//               'property_name': 'Shirt Type'
//             },
//             {
//               'id': 21,
//               'product_id': 5,
//               'property_id': 5,
//               'value': 'Short',
//               'property_name': 'Sleeve Type'
//             },
//             {
//               'id': 22,
//               'product_id': 5,
//               'property_id': 6,
//               'value': '100% Vellum',
//               'property_name': 'Made from'
//             },
//             {
//               'id': 23,
//               'product_id': 5,
//               'property_id': 7,
//               'value': 'Loose',
//               'property_name': 'Fit'
//             },
//             {
//               'id': 24,
//               'product_id': 5,
//               'property_id': 8,
//               'value': 'Men\'s',
//               'property_name': 'Gender'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 7,
//               'position': 2,
//               'taxon': {
//                 'id': 7,
//                 'name': 'T-Shirts',
//                 'pretty_name': 'Categories -> Clothing -> T-Shirts',
//                 'permalink': 'categories/clothing/t-shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 11,
//               'position': 7,
//               'taxon': {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 6,
//           'name': 'Ruby Baseball Jersey',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-baseball-jersey',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             7,
//             8
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 6,
//             'name': 'Ruby Baseball Jersey',
//             'sku': 'RUB-00001',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-baseball-jersey',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 34,
//                 'position': 1,
//                 'attachment_content_type': 'image/png',
//                 'attachment_file_name': 'ruby_baseball.png',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:21.292Z',
//                 'attachment_width': 495,
//                 'attachment_height': 477,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 6,
//                 'mini_url': '/spree/products/34/mini/ruby_baseball.png?1488951201',
//                 'small_url': '/spree/products/34/small/ruby_baseball.png?1488951201',
//                 'product_url': '/spree/products/34/product/ruby_baseball.png?1488951201',
//                 'large_url': '/spree/products/34/large/ruby_baseball.png?1488951201'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [],
//           'classifications': [
//             {
//               'taxon_id': 7,
//               'position': 4,
//               'taxon': {
//                 'id': 7,
//                 'name': 'T-Shirts',
//                 'pretty_name': 'Categories -> Clothing -> T-Shirts',
//                 'permalink': 'categories/clothing/t-shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 8,
//               'position': 1,
//               'taxon': {
//                 'id': 8,
//                 'name': 'Ruby',
//                 'pretty_name': 'Brand -> Ruby',
//                 'permalink': 'brand/ruby',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 7,
//           'name': 'Apache Baseball Jersey',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'apache-baseball-jersey',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             7,
//             9
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 7,
//             'name': 'Apache Baseball Jersey',
//             'sku': 'APC-00001',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'apache-baseball-jersey',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 33,
//                 'position': 1,
//                 'attachment_content_type': 'image/png',
//                 'attachment_file_name': 'apache_baseball.png',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:20.670Z',
//                 'attachment_width': 504,
//                 'attachment_height': 484,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 7,
//                 'mini_url': '/spree/products/33/mini/apache_baseball.png?1488951200',
//                 'small_url': '/spree/products/33/small/apache_baseball.png?1488951200',
//                 'product_url': '/spree/products/33/product/apache_baseball.png?1488951200',
//                 'large_url': '/spree/products/33/large/apache_baseball.png?1488951200'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [],
//           'classifications': [
//             {
//               'taxon_id': 7,
//               'position': 3,
//               'taxon': {
//                 'id': 7,
//                 'name': 'T-Shirts',
//                 'pretty_name': 'Categories -> Clothing -> T-Shirts',
//                 'permalink': 'categories/clothing/t-shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 9,
//               'position': 1,
//               'taxon': {
//                 'id': 9,
//                 'name': 'Apache',
//                 'pretty_name': 'Brand -> Apache',
//                 'permalink': 'brand/apache',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 8,
//           'name': 'Spree Baseball Jersey',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'spree-baseball-jersey',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             7,
//             10
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 8,
//             'name': 'Spree Baseball Jersey',
//             'sku': 'SPR-00001',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'spree-baseball-jersey',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 41,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_jersey.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:23.962Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 8,
//                 'mini_url': '/spree/products/41/mini/spree_jersey.jpeg?1488951203',
//                 'small_url': '/spree/products/41/small/spree_jersey.jpeg?1488951203',
//                 'product_url': '/spree/products/41/product/spree_jersey.jpeg?1488951203',
//                 'large_url': '/spree/products/41/large/spree_jersey.jpeg?1488951203'
//               },
//               {
//                 'id': 42,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_jersey_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:24.281Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 8,
//                 'mini_url': '/spree/products/42/mini/spree_jersey_back.jpeg?1488951204',
//                 'small_url': '/spree/products/42/small/spree_jersey_back.jpeg?1488951204',
//                 'product_url': '/spree/products/42/product/spree_jersey_back.jpeg?1488951204',
//                 'large_url': '/spree/products/42/large/spree_jersey_back.jpeg?1488951204'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [
//             {
//               'id': 1,
//               'name': 'tshirt-size',
//               'presentation': 'Size',
//               'position': 1
//             },
//             {
//               'id': 2,
//               'name': 'tshirt-color',
//               'presentation': 'Color',
//               'position': 2
//             }
//           ],
//           'product_properties': [
//             {
//               'id': 43,
//               'product_id': 8,
//               'property_id': 1,
//               'value': 'Wilson',
//               'property_name': 'Manufacturer'
//             },
//             {
//               'id': 44,
//               'product_id': 8,
//               'property_id': 2,
//               'value': 'Wannabe Sports',
//               'property_name': 'Brand'
//             },
//             {
//               'id': 45,
//               'product_id': 8,
//               'property_id': 3,
//               'value': 'JK1002',
//               'property_name': 'Model'
//             },
//             {
//               'id': 46,
//               'product_id': 8,
//               'property_id': 4,
//               'value': 'Baseball Jersey',
//               'property_name': 'Shirt Type'
//             },
//             {
//               'id': 47,
//               'product_id': 8,
//               'property_id': 5,
//               'value': 'Long',
//               'property_name': 'Sleeve Type'
//             },
//             {
//               'id': 48,
//               'product_id': 8,
//               'property_id': 6,
//               'value': '100% cotton',
//               'property_name': 'Made from'
//             },
//             {
//               'id': 49,
//               'product_id': 8,
//               'property_id': 7,
//               'value': 'Loose',
//               'property_name': 'Fit'
//             },
//             {
//               'id': 50,
//               'product_id': 8,
//               'property_id': 8,
//               'value': 'Men\'s',
//               'property_name': 'Gender'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 7,
//               'position': 5,
//               'taxon': {
//                 'id': 7,
//                 'name': 'T-Shirts',
//                 'pretty_name': 'Categories -> Clothing -> T-Shirts',
//                 'permalink': 'categories/clothing/t-shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 10,
//               'position': 4,
//               'taxon': {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 9,
//           'name': 'Spree Jr. Spaghetti',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'spree-jr-spaghetti',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             6,
//             10
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 9,
//             'name': 'Spree Jr. Spaghetti',
//             'sku': 'SPR-00013',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'spree-jr-spaghetti',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 40,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_spaghetti.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:23.647Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 9,
//                 'mini_url': '/spree/products/40/mini/spree_spaghetti.jpeg?1488951203',
//                 'small_url': '/spree/products/40/small/spree_spaghetti.jpeg?1488951203',
//                 'product_url': '/spree/products/40/product/spree_spaghetti.jpeg?1488951203',
//                 'large_url': '/spree/products/40/large/spree_spaghetti.jpeg?1488951203'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 51,
//               'product_id': 9,
//               'property_id': 1,
//               'value': 'Jerseys',
//               'property_name': 'Manufacturer'
//             },
//             {
//               'id': 52,
//               'product_id': 9,
//               'property_id': 2,
//               'value': 'Resiliance',
//               'property_name': 'Brand'
//             },
//             {
//               'id': 53,
//               'product_id': 9,
//               'property_id': 3,
//               'value': 'TL174',
//               'property_name': 'Model'
//             },
//             {
//               'id': 54,
//               'product_id': 9,
//               'property_id': 4,
//               'value': 'Jr. Spaghetti T',
//               'property_name': 'Shirt Type'
//             },
//             {
//               'id': 55,
//               'product_id': 9,
//               'property_id': 5,
//               'value': 'None',
//               'property_name': 'Sleeve Type'
//             },
//             {
//               'id': 56,
//               'product_id': 9,
//               'property_id': 6,
//               'value': '90% Cotton, 10% Nylon',
//               'property_name': 'Made from'
//             },
//             {
//               'id': 57,
//               'product_id': 9,
//               'property_id': 7,
//               'value': 'Form',
//               'property_name': 'Fit'
//             },
//             {
//               'id': 58,
//               'product_id': 9,
//               'property_id': 8,
//               'value': 'Women\'s',
//               'property_name': 'Gender'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 6,
//               'position': 2,
//               'taxon': {
//                 'id': 6,
//                 'name': 'Shirts',
//                 'pretty_name': 'Categories -> Clothing -> Shirts',
//                 'permalink': 'categories/clothing/shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 10,
//               'position': 7,
//               'taxon': {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 10,
//           'name': 'Spree Ringer T-Shirt',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '19.99',
//           'display_price': '$19.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'spree-ringer-t-shirt',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             7,
//             10
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 10,
//             'name': 'Spree Ringer T-Shirt',
//             'sku': 'SPR-00015',
//             'price': '19.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'spree-ringer-t-shirt',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '17.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 38,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_ringer_t.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:22.965Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 10,
//                 'mini_url': '/spree/products/38/mini/spree_ringer_t.jpeg?1488951202',
//                 'small_url': '/spree/products/38/small/spree_ringer_t.jpeg?1488951202',
//                 'product_url': '/spree/products/38/product/spree_ringer_t.jpeg?1488951202',
//                 'large_url': '/spree/products/38/large/spree_ringer_t.jpeg?1488951202'
//               },
//               {
//                 'id': 39,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_ringer_t_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:23.288Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 10,
//                 'mini_url': '/spree/products/39/mini/spree_ringer_t_back.jpeg?1488951203',
//                 'small_url': '/spree/products/39/small/spree_ringer_t_back.jpeg?1488951203',
//                 'product_url': '/spree/products/39/product/spree_ringer_t_back.jpeg?1488951203',
//                 'large_url': '/spree/products/39/large/spree_ringer_t_back.jpeg?1488951203'
//               }
//             ],
//             'display_price': '$19.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 59,
//               'product_id': 10,
//               'property_id': 1,
//               'value': 'Jerseys',
//               'property_name': 'Manufacturer'
//             },
//             {
//               'id': 60,
//               'product_id': 10,
//               'property_id': 2,
//               'value': 'Conditioned',
//               'property_name': 'Brand'
//             },
//             {
//               'id': 61,
//               'product_id': 10,
//               'property_id': 3,
//               'value': 'TL9002',
//               'property_name': 'Model'
//             },
//             {
//               'id': 62,
//               'product_id': 10,
//               'property_id': 4,
//               'value': 'Ringer T',
//               'property_name': 'Shirt Type'
//             },
//             {
//               'id': 63,
//               'product_id': 10,
//               'property_id': 5,
//               'value': 'Short',
//               'property_name': 'Sleeve Type'
//             },
//             {
//               'id': 64,
//               'product_id': 10,
//               'property_id': 6,
//               'value': '100% Vellum',
//               'property_name': 'Made from'
//             },
//             {
//               'id': 65,
//               'product_id': 10,
//               'property_id': 7,
//               'value': 'Loose',
//               'property_name': 'Fit'
//             },
//             {
//               'id': 66,
//               'product_id': 10,
//               'property_id': 8,
//               'value': 'Men\'s',
//               'property_name': 'Gender'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 7,
//               'position': 6,
//               'taxon': {
//                 'id': 7,
//                 'name': 'T-Shirts',
//                 'pretty_name': 'Categories -> Clothing -> T-Shirts',
//                 'permalink': 'categories/clothing/t-shirts',
//                 'parent_id': 5,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 10,
//               'position': 3,
//               'taxon': {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 11,
//           'name': 'Spree Tote',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '15.99',
//           'display_price': '$15.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'spree-tote',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             3,
//             10
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 11,
//             'name': 'Spree Tote',
//             'sku': 'SPR-00011',
//             'price': '15.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'spree-tote',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '13.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 36,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_tote_front.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:22.245Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 11,
//                 'mini_url': '/spree/products/36/mini/spree_tote_front.jpeg?1488951202',
//                 'small_url': '/spree/products/36/small/spree_tote_front.jpeg?1488951202',
//                 'product_url': '/spree/products/36/product/spree_tote_front.jpeg?1488951202',
//                 'large_url': '/spree/products/36/large/spree_tote_front.jpeg?1488951202'
//               },
//               {
//                 'id': 37,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_tote_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:22.633Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 11,
//                 'mini_url': '/spree/products/37/mini/spree_tote_back.jpeg?1488951202',
//                 'small_url': '/spree/products/37/small/spree_tote_back.jpeg?1488951202',
//                 'product_url': '/spree/products/37/product/spree_tote_back.jpeg?1488951202',
//                 'large_url': '/spree/products/37/large/spree_tote_back.jpeg?1488951202'
//               }
//             ],
//             'display_price': '$15.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 39,
//               'product_id': 11,
//               'property_id': 9,
//               'value': 'Tote',
//               'property_name': 'Type'
//             },
//             {
//               'id': 40,
//               'product_id': 11,
//               'property_id': 10,
//               'value': '15" x 18" x 6"',
//               'property_name': 'Size'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 3,
//               'position': 3,
//               'taxon': {
//                 'id': 3,
//                 'name': 'Bags',
//                 'pretty_name': 'Categories -> Bags',
//                 'permalink': 'categories/bags',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 10,
//               'position': 5,
//               'taxon': {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 12,
//           'name': 'Spree Bag',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '22.99',
//           'display_price': '$22.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'spree-bag',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             3,
//             10
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 12,
//             'name': 'Spree Bag',
//             'sku': 'SPR-00012',
//             'price': '22.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'spree-bag',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '21.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 35,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_bag.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:21.893Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 12,
//                 'mini_url': '/spree/products/35/mini/spree_bag.jpeg?1488951201',
//                 'small_url': '/spree/products/35/small/spree_bag.jpeg?1488951201',
//                 'product_url': '/spree/products/35/product/spree_bag.jpeg?1488951201',
//                 'large_url': '/spree/products/35/large/spree_bag.jpeg?1488951201'
//               }
//             ],
//             'display_price': '$22.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 41,
//               'product_id': 12,
//               'property_id': 9,
//               'value': 'Messenger',
//               'property_name': 'Type'
//             },
//             {
//               'id': 42,
//               'product_id': 12,
//               'property_id': 10,
//               'value': '14 1/2" x 12" x 5"',
//               'property_name': 'Size'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 3,
//               'position': 4,
//               'taxon': {
//                 'id': 3,
//                 'name': 'Bags',
//                 'pretty_name': 'Categories -> Bags',
//                 'permalink': 'categories/bags',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 10,
//               'position': 6,
//               'taxon': {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 13,
//           'name': 'Ruby on Rails Mug',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '13.99',
//           'display_price': '$13.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-on-rails-mug',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             4,
//             11
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 13,
//             'name': 'Ruby on Rails Mug',
//             'sku': 'ROR-00014',
//             'price': '13.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-on-rails-mug',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '11.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 27,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_mug.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:18.625Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 13,
//                 'mini_url': '/spree/products/27/mini/ror_mug.jpeg?1488951198',
//                 'small_url': '/spree/products/27/small/ror_mug.jpeg?1488951198',
//                 'product_url': '/spree/products/27/product/ror_mug.jpeg?1488951198',
//                 'large_url': '/spree/products/27/large/ror_mug.jpeg?1488951198'
//               },
//               {
//                 'id': 28,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_mug_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:18.990Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 13,
//                 'mini_url': '/spree/products/28/mini/ror_mug_back.jpeg?1488951198',
//                 'small_url': '/spree/products/28/small/ror_mug_back.jpeg?1488951198',
//                 'product_url': '/spree/products/28/product/ror_mug_back.jpeg?1488951198',
//                 'large_url': '/spree/products/28/large/ror_mug_back.jpeg?1488951198'
//               }
//             ],
//             'display_price': '$13.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 31,
//               'product_id': 13,
//               'property_id': 9,
//               'value': 'Mug',
//               'property_name': 'Type'
//             },
//             {
//               'id': 32,
//               'product_id': 13,
//               'property_id': 10,
//               'value': '4.5" tall, 3.25" dia.',
//               'property_name': 'Size'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 4,
//               'position': 1,
//               'taxon': {
//                 'id': 4,
//                 'name': 'Mugs',
//                 'pretty_name': 'Categories -> Mugs',
//                 'permalink': 'categories/mugs',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 11,
//               'position': 3,
//               'taxon': {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 14,
//           'name': 'Ruby on Rails Stein',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '16.99',
//           'display_price': '$16.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'ruby-on-rails-stein',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             4,
//             11
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 14,
//             'name': 'Ruby on Rails Stein',
//             'sku': 'ROR-00016',
//             'price': '16.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'ruby-on-rails-stein',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '15.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 31,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_stein.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:19.992Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 14,
//                 'mini_url': '/spree/products/31/mini/ror_stein.jpeg?1488951199',
//                 'small_url': '/spree/products/31/small/ror_stein.jpeg?1488951199',
//                 'product_url': '/spree/products/31/product/ror_stein.jpeg?1488951199',
//                 'large_url': '/spree/products/31/large/ror_stein.jpeg?1488951199'
//               },
//               {
//                 'id': 32,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'ror_stein_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:20.307Z',
//                 'attachment_width': 360,
//                 'attachment_height': 360,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 14,
//                 'mini_url': '/spree/products/32/mini/ror_stein_back.jpeg?1488951200',
//                 'small_url': '/spree/products/32/small/ror_stein_back.jpeg?1488951200',
//                 'product_url': '/spree/products/32/product/ror_stein_back.jpeg?1488951200',
//                 'large_url': '/spree/products/32/large/ror_stein_back.jpeg?1488951200'
//               }
//             ],
//             'display_price': '$16.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 33,
//               'product_id': 14,
//               'property_id': 9,
//               'value': 'Stein',
//               'property_name': 'Type'
//             },
//             {
//               'id': 34,
//               'product_id': 14,
//               'property_id': 10,
//               'value': '6.75" tall, 3.75" dia. base, 3" dia. rim',
//               'property_name': 'Size'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 4,
//               'position': 2,
//               'taxon': {
//                 'id': 4,
//                 'name': 'Mugs',
//                 'pretty_name': 'Categories -> Mugs',
//                 'permalink': 'categories/mugs',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 11,
//               'position': 4,
//               'taxon': {
//                 'id': 11,
//                 'name': 'Rails',
//                 'pretty_name': 'Brand -> Rails',
//                 'permalink': 'brand/rails',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 15,
//           'name': 'Spree Stein',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '16.99',
//           'display_price': '$16.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'spree-stein',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             4,
//             10
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 15,
//             'name': 'Spree Stein',
//             'sku': 'SPR-00016',
//             'price': '16.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'spree-stein',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '15.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 43,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_stein.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:24.603Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 15,
//                 'mini_url': '/spree/products/43/mini/spree_stein.jpeg?1488951204',
//                 'small_url': '/spree/products/43/small/spree_stein.jpeg?1488951204',
//                 'product_url': '/spree/products/43/product/spree_stein.jpeg?1488951204',
//                 'large_url': '/spree/products/43/large/spree_stein.jpeg?1488951204'
//               },
//               {
//                 'id': 44,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_stein_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:24.912Z',
//                 'attachment_width': 480,
//                 'attachment_height': 480,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 15,
//                 'mini_url': '/spree/products/44/mini/spree_stein_back.jpeg?1488951204',
//                 'small_url': '/spree/products/44/small/spree_stein_back.jpeg?1488951204',
//                 'product_url': '/spree/products/44/product/spree_stein_back.jpeg?1488951204',
//                 'large_url': '/spree/products/44/large/spree_stein_back.jpeg?1488951204'
//               }
//             ],
//             'display_price': '$16.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 35,
//               'product_id': 15,
//               'property_id': 9,
//               'value': 'Stein',
//               'property_name': 'Type'
//             },
//             {
//               'id': 36,
//               'product_id': 15,
//               'property_id': 10,
//               'value': '6.75" tall, 3.75" dia. base, 3" dia. rim',
//               'property_name': 'Size'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 4,
//               'position': 3,
//               'taxon': {
//                 'id': 4,
//                 'name': 'Mugs',
//                 'pretty_name': 'Categories -> Mugs',
//                 'permalink': 'categories/mugs',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 10,
//               'position': 1,
//               'taxon': {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         },
//         {
//           'id': 16,
//           'name': 'Spree Mug',
//           'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//           'price': '13.99',
//           'display_price': '$13.99',
//           'available_on': '2017-03-08T05:32:34.364Z',
//           'slug': 'spree-mug',
//           'meta_description': null,
//           'meta_keywords': null,
//           'shipping_category_id': 1,
//           'taxon_ids': [
//             4,
//             10
//           ],
//           'total_on_hand': 10,
//           'master': {
//             'id': 16,
//             'name': 'Spree Mug',
//             'sku': 'SPR-00014',
//             'price': '13.99',
//             'weight': '0.0',
//             'height': null,
//             'width': null,
//             'depth': null,
//             'is_master': true,
//             'slug': 'spree-mug',
//             'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
//             'track_inventory': true,
//             'cost_price': '11.0',
//             'option_values': [],
//             'images': [
//               {
//                 'id': 45,
//                 'position': 1,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_mug.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:25.223Z',
//                 'attachment_width': 240,
//                 'attachment_height': 240,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 16,
//                 'mini_url': '/spree/products/45/mini/spree_mug.jpeg?1488951205',
//                 'small_url': '/spree/products/45/small/spree_mug.jpeg?1488951205',
//                 'product_url': '/spree/products/45/product/spree_mug.jpeg?1488951205',
//                 'large_url': '/spree/products/45/large/spree_mug.jpeg?1488951205'
//               },
//               {
//                 'id': 46,
//                 'position': 2,
//                 'attachment_content_type': 'image/jpeg',
//                 'attachment_file_name': 'spree_mug_back.jpeg',
//                 'type': 'Spree::Image',
//                 'attachment_updated_at': '2017-03-08T05:33:25.535Z',
//                 'attachment_width': 240,
//                 'attachment_height': 240,
//                 'alt': null,
//                 'viewable_type': 'Spree::Variant',
//                 'viewable_id': 16,
//                 'mini_url': '/spree/products/46/mini/spree_mug_back.jpeg?1488951205',
//                 'small_url': '/spree/products/46/small/spree_mug_back.jpeg?1488951205',
//                 'product_url': '/spree/products/46/product/spree_mug_back.jpeg?1488951205',
//                 'large_url': '/spree/products/46/large/spree_mug_back.jpeg?1488951205'
//               }
//             ],
//             'display_price': '$13.99',
//             'options_text': '',
//             'in_stock': true,
//             'is_backorderable': true,
//             'total_on_hand': 10,
//             'is_destroyed': false
//           },
//           'variants': [],
//           'option_types': [],
//           'product_properties': [
//             {
//               'id': 37,
//               'product_id': 16,
//               'property_id': 9,
//               'value': 'Mug',
//               'property_name': 'Type'
//             },
//             {
//               'id': 38,
//               'product_id': 16,
//               'property_id': 10,
//               'value': '4.5" tall, 3.25" dia.',
//               'property_name': 'Size'
//             }
//           ],
//           'classifications': [
//             {
//               'taxon_id': 4,
//               'position': 4,
//               'taxon': {
//                 'id': 4,
//                 'name': 'Mugs',
//                 'pretty_name': 'Categories -> Mugs',
//                 'permalink': 'categories/mugs',
//                 'parent_id': 1,
//                 'taxonomy_id': 1,
//                 'taxons': []
//               }
//             },
//             {
//               'taxon_id': 10,
//               'position': 2,
//               'taxon': {
//                 'id': 10,
//                 'name': 'Spree',
//                 'pretty_name': 'Brand -> Spree',
//                 'permalink': 'brand/spree',
//                 'parent_id': 2,
//                 'taxonomy_id': 2,
//                 'taxons': []
//               }
//             }
//           ],
//           'has_variants': false
//         }
//       ],
//       'count': 16,
//       'total_count': 16,
//       'current_page': 1,
//       'per_page': 25,
//       'pages': 1
//     };

//     return Observable.of(data);
//   }
// }
