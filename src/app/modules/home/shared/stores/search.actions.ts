import { createAction, props } from '@ngrx/store';
import { ISurvey } from '../types/survey.interface';

export const addMultipleSurveys = createAction(
  '[Survey] Add Multiple',
  props<{ payload: ISurvey[] }>()
);
