import { Injectable, Signal, computed } from "@angular/core";
import { Store } from "../../../core/shared/model/store.model";
import { ProductSales, ProductSalesColumn, ProductSalesRow } from "../model/product-sales.model";
import productSales from '../../../../assets/json/potato_sales.json';

@Injectable({
    providedIn: 'root'
  })
  export class ProductSalesStore extends Store<ProductSales> {

    readonly $productSalesColumns: Signal<ProductSalesColumn[]> = computed(() => this.$state().column);
    readonly $productSales: Signal<ProductSalesRow[]> = computed(() => this.$state().data);
    
    constructor() {
      super();
      this.$state.set(productSales as ProductSales);
    }
  }
  