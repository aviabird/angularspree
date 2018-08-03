import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetails$: Observable<any>

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userDetails$ = this.userService.getUser();
  }
}
