/**
 * Taxonomy Model
 * More info http://guides.spreecommerce.org/user/configuring_taxonomies.html
 * Public API's http://guides.spreecommerce.org/api/taxonomies.html
 */

import { Taxon } from './taxon';

export interface Taxonomy {
  id: number;
  name: string;
  root: Taxon;
}
