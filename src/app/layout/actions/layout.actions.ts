import { Action } from '@ngrx/store';
import { LayoutState } from '../reducers/layout.state';

export enum LayoutActionTypes {
  LoadLayouts = '[Layout] Load Layouts',
  HideMobileSearchBar = '[Layout] Hide Mobile Search Bar',
  ShowMobileSearchBar = '[Layout] Show Mobile Search Bar',
  HideMobileMainMenu = '[Layout] Hide Mobile Main Menu',
  ShowMobileMainMenu = '[Layout] Show Mobile Main Menu',
}

export class LoadLayouts implements Action {
  readonly type = LayoutActionTypes.LoadLayouts;

  constructor(public payload: LayoutState) {}
}

export class HideMobileSearchBar implements Action {
  readonly type = LayoutActionTypes.HideMobileSearchBar;
}

export class ShowMobileSearchBar implements Action {
  readonly type = LayoutActionTypes.ShowMobileSearchBar;
}

export class ShowMobileMainMenu implements Action {
  readonly type = LayoutActionTypes.ShowMobileMainMenu;
}

export class HideMobileMainMenu implements Action {
  readonly type = LayoutActionTypes.HideMobileMainMenu;
}

export type LayoutActions =
  | LoadLayouts
  | HideMobileSearchBar
  | ShowMobileSearchBar
  | ShowMobileMainMenu
  | HideMobileMainMenu;
