import { Action } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

// load pizzas
// ACTION CONSTANTS
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Success';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Fail';

// ACTION CREATORS

// implements Action for type checking purposes
export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
    // we use payload of type any so if something comes back
    // from the server if there is an error.
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {}
}

// export action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;