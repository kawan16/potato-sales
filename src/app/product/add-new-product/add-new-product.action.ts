import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '../../core/shared/model/action.model';
import { ProductToAdd } from '../shared/model/product.model';
import { Router } from '@angular/router';
import { ProductSalesStore } from '../../product-sales/shared/store/product-sales.store';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductAction extends Action<ProductToAdd, Observable<boolean>> {

  readonly router = inject(Router);
  readonly store = inject(ProductSalesStore);

  execute( product: ProductToAdd ): Observable<boolean> {
    this.store.$state.update(state => ({
      column: state.column,
      data: [
        {
          ...product, 
          productID: String(product.productID), 
          salesQ1: 0, 
          salesQ2: 0,
          salesQ3: 0, 
          salesQ4: 0},
        ...(state.data || []),
      ]
    }));
    this.router.navigate(['sales']);
    return of(true);
  }
}