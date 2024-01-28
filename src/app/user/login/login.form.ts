
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class LoginForm extends FormGroup { 

  hasBeenSubmitted: boolean = false;

  constructor() {
    super({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get areRequiredFieldMssing(): boolean {
    return Object.values(this.controls).some(control => control.hasError('required'));
  }

  set hasLoginInvalidError(value: boolean) {
    this.setErrors({ isLoginInvalid: value });
  }

  get hasLoginInvalidError(): boolean {
    return this.hasError('isLoginInvalid');
  }

  onSubmitted(isLoginValid: boolean) {
    this.hasBeenSubmitted = true;
    this.hasLoginInvalidError = !isLoginValid;
  }
}