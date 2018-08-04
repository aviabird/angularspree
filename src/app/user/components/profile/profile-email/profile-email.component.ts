import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../../core/services/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-profile-email',
  templateUrl: './profile-email.component.html',
  styleUrls: ['./profile-email.component.scss']
})
export class ProfileEmailComponent implements OnInit {
  @Input() userDetails;
  modalRef: BsModalRef;
  emailForm: FormGroup;
  isEditEmailPressed: boolean;
  currentuserId: number;

  constructor(private userService: UserService,
    private fb: FormBuilder,
    private toastyService: ToastrService,
    private authService: AuthService,
    private modalService: BsModalService) { }

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

  emailConfirmModal(template: TemplateRef<any>, id: number) {
    this.currentuserId = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
   this.onSaveEmail(this.currentuserId)
    this.modalRef.hide();
  }

  decline(): void {
    this.isEditEmailPressed = false;
    this.modalRef.hide();
  }
}
