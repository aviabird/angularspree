import { CState } from './state';

export class Country {
  id: string;
  iso_name: string;
  name: string;
  states: CState[];
}
