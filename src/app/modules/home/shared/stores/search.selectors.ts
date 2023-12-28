import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './search.reducer';

export const selectSearchState = createFeatureSelector<State>('search');
export const selectAllSurveys = createSelector(
  selectSearchState,
  (state) => state.surveys
);