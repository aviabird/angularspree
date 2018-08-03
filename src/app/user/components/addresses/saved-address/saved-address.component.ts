import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.scss']
})
export class SavedAddressComponent implements OnInit {

  @Input() userDetails;
  constructor() { }

  ngOnInit() {
  }

}
