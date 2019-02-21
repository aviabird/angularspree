import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-mobile-filter-list',
  templateUrl: './mobile-filter-list.component.html',
  styleUrls: ['./mobile-filter-list.component.scss']
})
export class MobileFilterListComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    animated: true,
    show: true
  };
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
