import { UntypedFormGroup } from '@angular/forms';

export class PasswordMatchValidator {
  static validate(passwordFormGroup: UntypedFormGroup) {
    const password = passwordFormGroup.controls.password.value;
    const repeatPassword =
      passwordFormGroup.controls.password_confirmation.value;

    if (repeatPassword.length <= 0) {
      return null;
    }

    if (repeatPassword !== password) {
      return {
        doesMatchPassword: true
      };
    }
    return null;
  }
}
