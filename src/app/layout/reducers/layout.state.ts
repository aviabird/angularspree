import { Map, Record } from 'immutable';

export interface LayoutState extends Map<string, any> {
  showMobileSearchBar: boolean;
  showMobileMainMenu: boolean;
  isMobileView: boolean;
}

export const LayoutStateRecord = Record({
  showMobileSearchBar: true,
  showMobileMainMenu: false,
  isMobileView: false,
});
