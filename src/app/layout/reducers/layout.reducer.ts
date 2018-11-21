import { LayoutState, LayoutStateRecord } from './layout.state';
import { LayoutActions, LayoutActionTypes } from '../actions/layout.actions';

export const initialState: LayoutState = new LayoutStateRecord() as unknown as LayoutState;

export function reducer(state = initialState, action: LayoutActions): LayoutState {
  switch (action.type) {

    case LayoutActionTypes.LoadLayouts:
      return state.merge(action.payload) as LayoutState;

    case LayoutActionTypes.HideMobileSearchBar:
      return state.merge({showMobileSearchBar: false}) as LayoutState;

    case LayoutActionTypes.ShowMobileSearchBar:
      return state.merge({showMobileSearchBar: true}) as LayoutState;

    case LayoutActionTypes.HideMobileMainMenu:
      return state.merge({showMobileMainMenu: false}) as LayoutState;

    case LayoutActionTypes.ShowMobileMainMenu:
      return state.merge({showMobileMainMenu: true}) as LayoutState;

    default:
      return state;
  }
}
