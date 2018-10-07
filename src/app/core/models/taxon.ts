export class Taxon {
  id: number;
  name: string;
  pretty_name: string;
  permalink: string;
  parent_id: number;
  taxonomy_id: number;
  checked: boolean = false;
  taxons: Taxon[];
  icon: string;
  image_url: string;
}
