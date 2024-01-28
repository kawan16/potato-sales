import { Component, inject } from '@angular/core';
import { AddNewProductForm } from './add-new-product.form';
import { Router, RouterModule } from '@angular/router';
import { filter, first, of, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewProductAction } from './add-new-product.action';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent {

  readonly router = inject(Router);
  readonly addAction = inject(AddNewProductAction);
  
  readonly form: AddNewProductForm = new AddNewProductForm();

  /** Whenever the user submit the new product */
  readonly add = () => of(this.form.valid).pipe(
    first(),
    filter(isValid => isValid),
    switchMap(() => this.addAction.execute(this.form.value))
  ).subscribe();

  /** Whenever the user wants to clean the new product form information */
  readonly reset = () => this.form.reset()
}
