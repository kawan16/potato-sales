
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class AddNewProductForm extends FormGroup { 

  hasBeenSubmitted: boolean = false;

  constructor() {
    super({
        productName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        productID: new FormControl('', [Validators.required, Validators.pattern(/^\d{13}$/)]),
        productManager: new FormControl('', [Validators.maxLength(30)]),
        productSalesStartDate: new FormControl('', [Validators.required]),
    });
  }
}