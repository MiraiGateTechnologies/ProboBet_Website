import { AbstractControl, ValidatorFn } from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    // Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.
    const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;

    if (!strongPasswordRegex.test(value)) {
      return { 'strongPassword': true };
    }

    return null;
  };
}
