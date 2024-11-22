import { createAction, props } from '@ngrx/store';
import { ProfileData } from '../models/ProfileData.model';

export const loadData = createAction('[Data] Load Data');

export const loadDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: ProfileData }>()
);

export const loadProfileFailure = createAction(
  '[Data] Load Data Failure',
  props<{ error: string }>()
);
