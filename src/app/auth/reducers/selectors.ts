import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { AuthState } from './auth.state';
import { User } from '../../core/models/user';
import { RatingCategory } from '../../core/models/rating_category';

// Base state function
const getAuthState = (state: AppState): AuthState => state.auth;

// ******************** Individual selectors ***************************
const fetchAuthStatus = (state: AuthState): boolean => state.isAuthenticated;
const fetchCurrentUser = (state: AuthState): User => state.currentUser;
const fetchRatingCategories =
  (state: AuthState): RatingCategory[] =>
    state.ratingCategories as unknown as RatingCategory[];

// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
export const getCurrentUser = createSelector(getAuthState, fetchCurrentUser);
export const getRatingCategories = createSelector(getAuthState, fetchRatingCategories);
