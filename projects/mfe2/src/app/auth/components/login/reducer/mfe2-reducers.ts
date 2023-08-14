import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { mfe2GetState } from '../actions/mfe2.actions';

export const reportsKey = 'mfe2State';


export interface AppState {
  Mfe2mfe2StateState: FeatureState;
}

export const selectMfe2State = createFeatureSelector<FeatureState>(reportsKey);

export const selectMfe2Values = createSelector(
    selectMfe2State,
  (state: FeatureState) => state.values
);


export interface FeatureState {
    values: any[];
}

const initialState = {
  values: ['new1', 'new2', 'new3'],
};

const reducer = createReducer(
  initialState,

  on(mfe2GetState.getState, state => ({
    ...state,
    isLoading: true
  })
  ),

);

export function Mfe2Reducer(state: any, action: Action) {
  return reducer(state, action);
}
