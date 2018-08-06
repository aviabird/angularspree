import { Map, Record } from 'immutable';

export interface LayoutState extends Map<string, any> {
  showMobileSearchBar: boolean;
  showMobileMainMenu: boolean;
}

export const LayoutStateRecord = Record({
  showMobileSearchBar: true,
  showMobileMainMenu: false
});
