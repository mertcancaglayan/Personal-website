import { createReducer, on } from '@ngrx/store';
import {
  loadData,
  loadDataSuccess,
  loadProfileFailure,
} from './profile.actions';
import { ProfileData } from '../models/ProfileData.model';

export interface ProfileState {
  profile: ProfileData | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

export const profileReducer = createReducer(
  initialState,
  on(loadData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadDataSuccess, (state, { data }) => ({
    ...state,
    profile: data,
    loading: false,
    error: null,
  })),

  on(loadProfileFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
