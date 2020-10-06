import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
// grab observable for type checking
import { Observable } from "rxjs/Observable";
import * as fromStore from "../../store";

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
        <div *ngIf="!pizzas?.length">No pizzas, add one to get started.</div>
        <pizza-item *ngFor="let pizza of pizzas" [pizza]="pizza"> </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas: Pizza[];

  /* 
     type check anything we access inside of here (constructor),
     can only select things from the store that correspond
     or exist in the ProductState
  */
  constructor(private store: Store<ProductState>) {}

  ngOnInit() {
    // how do we obtain properties from our store?
    this.store.select<any>('products').subscribe(state => {
      console.log(state)
    })
  }
}
