import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { PasswordMatchValidator } from '../../../../shared/custom-validator/password-match-validator';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {
  @Input() userDetails;
  isChangePasswordPressed: boolean;
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const password = '';
    const password_confirmation = '';
    this.passwordForm = this.fb.group({
      'password': [password, Validators.compose([Validators.required, Validators.minLength(6)])],
      'password_confirmation': [password_confirmation, Validators.required],
    }, {
        validator: PasswordMatchValidator.validate.bind(this)
      });
  }

  changePassword() {
    this.isChangePasswordPressed = true;
  }

  cancelPressed() {
    this.isChangePasswordPressed = false;
  }
  onPasswordChange(id) {
    const params = {
      spree_user:
      {
        email: this.userDetails.email,
        password: this.passwordForm.value.password,
      }
    };
    this.userService.updateUserPassword(params)
      .subscribe(res => {
        this.isChangePasswordPressed = !res;
      });
  }
}
