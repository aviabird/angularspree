import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDescriptionComponent implements OnInit {
  @Input() description;
  constructor() {}

  ngOnInit() {}
}
