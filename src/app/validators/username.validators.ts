import { ValidationErrors, AbstractControl } from "@angular/forms";


export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return (_cannotContainSpace: true) => {

    }

  return null;
  }
}