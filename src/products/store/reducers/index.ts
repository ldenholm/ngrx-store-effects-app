// type checking utility
import { ActionReducerMap } from '@ngrx/store';
import { Action } from 'rxjs/scheduler/Action';

import * as fromPizzas from './pizzas.reducer';

export interface ProductState {
    // reference interface PizzaState
    pizzas: fromPizzas.PizzaState
}

// bind interface to actionReducerMap which describes what these
// reducers look like and how they are composed:
export const reducers: ActionReducerMap<ProductState> = {
    // slice of state is pizzas, managed by fromPizzas.reducer
    pizzas: fromPizzas.reducer, 
}