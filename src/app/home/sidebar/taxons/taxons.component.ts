import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-taxons',
  templateUrl: './taxons.component.html',
  styleUrls: ['./taxons.component.scss']
})
export class TaxonsComponent implements OnInit {
  @Input() taxonomies;

  constructor() { }

  ngOnInit() {
  }

}
