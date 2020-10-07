import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
// grab observable for type checking
import { Observable } from "rxjs/Observable";
// grab store
import * as fromStore from "../../store";
//grab pizza interface
import { Pizza } from "../../models/pizza.model";
import { ProductState } from "../../store";

@Component({
  selector: "products",
  styleUrls: ["products.component.scss"],
  template: `
    <div class="products">
      <div class="products__new">
        <a class="btn btn__ok" routerLink="./new"> New Pizza </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">No pizzas, add one to get started.</div>
        <pizza-item *ngFor="let pizza of (pizzas$ | async)" [pizza]="pizza"> </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza>[];

  /* 
     type check anything we access inside of here (constructor),
     can only select things from the store that correspond
     or exist in the ProductState
  */
  constructor(private store: Store<ProductState>) {}

  ngOnInit() {
    // how do we obtain properties from our store?
    this.store.select(fromStore.getAllPizzas).subscribe(state => {
      //console.log(state)
      this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    })
  }
}
