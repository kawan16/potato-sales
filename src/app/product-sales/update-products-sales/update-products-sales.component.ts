import { Component, inject } from '@angular/core';
import { ProductSalesStore } from '../shared/store/product-sales.store';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'update-products-sales',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
  ],
  templateUrl: './update-products-sales.component.html',
  styleUrl: './update-products-sales.component.css',
})
export class UpdateProductsSalesComponent {
  
  readonly store = inject(ProductSalesStore);

  readonly $productSales = this.store.$productSales;

  readonly header = (field: string) => this.store.$productSalesColumns()
    .find(column => column.field === field)?.header;

  readonly subheader = (field: string) => this.store.$productSalesColumns()
    .flatMap(column => column.subHeaders)
    .find(subheader => subheader?.field === field)?.header;
     
  readonly search = (datatable: any, $event: any) =>  datatable.filterGlobal($event.target.value, 'contains');

}
