import { createReducer, on } from '@ngrx/store';
import { ISurvey } from '../types/survey.interface';
import { addMultipleSurveys } from './search.actions';

export interface State {
  surveys: ISurvey[];
}

export const initialState: State = {
  surveys: [],
};

export const searchReducer = createReducer(
  initialState,

  on(addMultipleSurveys, (state, { payload }) => {
    return { ...initialState, surveys: [...payload] };
  })
);
