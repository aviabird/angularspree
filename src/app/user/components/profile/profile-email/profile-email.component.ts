import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-profile-email',
  templateUrl: './profile-email.component.html',
  styleUrls: ['./profile-email.component.scss']
})
export class ProfileEmailComponent implements OnInit {
  @Input() userDetails;

  emailForm: FormGroup;
  isEditEmailPressed: boolean;

  constructor(private userService: UserService,
    private fb: FormBuilder,
    private toastyService: ToastrService,
    private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const email = this.userDetails.email;
    this.emailForm = this.fb.group({
      'email': [email, Validators.compose([Validators.required, Validators.email])]
    });
  }

  editEmail() {
    this.isEditEmailPressed = true;
  }

  cancelEmail() {
    this.isEditEmailPressed = false;
  }

  onSaveEmail(id) {
    const params = { user_id: id, email: this.emailForm.value.email }
    this.userService.updateUser(params)
      .subscribe(success => {
        this.toastyService.success('Email Updated!', 'Success!');
        this.authService.logout().subscribe();
      }, error => {
        this.toastyService.error('Email could not be updated!', 'Error!');
      })
  }
}
