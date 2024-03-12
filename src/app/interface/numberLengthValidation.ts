import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numericLengthValidator(minLength: number, maxLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (value === null || value === undefined || value === '') {
            return null; // Return null if the value is empty
        }

        // Convert value to string to calculate its length
        const stringValue = value.toString();
        const length = stringValue.length;

        if (length < minLength || length > maxLength) {
            return { 'numericLength': { minLength, maxLength } }; // Return error if length is not within range
        }

        return null; // Return null if validation passes
    };
}
export function nonNegativeAmountValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const amount = control.value;
    if (amount < 0) {
      return { 'negativeAmount': { value: amount } };
    }
    return null;
  };
}
