import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LinkList } from '../link-list.model';

@Component({
  selector: 'app-link-list-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() link: LinkList;
  @Output() linkSelected = new EventEmitter<LinkList>();
  constructor() { }

  ngOnInit() {

  }

  onLinkSelected() {
    setTimeout(() => {
      this.link.title += '1';
      this.linkSelected.emit(this.link);
    }, 500);
  }
}
