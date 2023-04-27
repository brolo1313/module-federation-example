import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { HomeActions } from '../actions/home-actions';

export const reportsKey = 'shellState';


export interface AppState {
  shellState: FeatureState;
}

export const selectShellState = createFeatureSelector<FeatureState>(reportsKey);

export const selectNames = createSelector(
  selectShellState,
  (state: FeatureState) => state.names
);


export interface FeatureState {
  names: any[];
}

const initialState = {
  names: ['Test', 'Test2', 'Test3','Test4'],
};

const reducer = createReducer(
  initialState,

  on(HomeActions.getNames, state => ({
    ...state,
    isLoading: true
  })
  ),

);

export function homeReducer(state: any, action: Action) {
  return reducer(state, action);
}
