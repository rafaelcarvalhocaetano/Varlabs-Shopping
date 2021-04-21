import { createReducer, on } from '@ngrx/store';

import { addItemCar } from '../actions/store.action';
import { initialStoreState } from '../states/store.state';

const _storeReducer = createReducer(
  initialStoreState,
  on(
    addItemCar,
    (state, action) => {
      return {
        ... state,
        amountStoreCar: action.amountStoreCar
      }
    }
  )
);

export const storeReducer = (state, action) => {
  return _storeReducer(state, action)
}
