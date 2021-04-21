import { createAction, props } from '@ngrx/store';

export const addItemCar = createAction(
  'amountStoreCar',
  props<{ amountStoreCar: number }>()
)
