// type checking utility
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { createSelector } from '@ngrx/store/src/selector';

import * as fromPizzas from "./pizzas.reducer";

export interface ProductState {
  // reference interface PizzaState
  pizzas: fromPizzas.PizzaState;
}

// bind interface to actionReducerMap which describes what these
// reducers look like and how they are composed:
export const reducers: ActionReducerMap<ProductState> = {
  // slice of state is pizzas, managed by fromPizzas.reducer
  pizzas: fromPizzas.reducer,
};


// SELECTORS:

export const getProductsState = createFeatureSelector<ProductState>("products");

// pizza state

// going from from products, then 
// into pizza next layer of data structure
export const getPizzaState = createSelector(getProductsState, (state: ProductState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);