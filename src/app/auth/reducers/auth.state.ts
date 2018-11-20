import { Map, Record, List } from 'immutable';
import { RatingCategory } from '../../core/models/rating_category';

export interface AuthState extends Map<string, any> {
  isAuthenticated: boolean;
  currentUser: any,
  ratingCategories: List<RatingCategory>;
}

export const AuthStateRecord = Record({
  isAuthenticated: false,
  currentUser: Map({}),
  ratingCategories: List([])
});
