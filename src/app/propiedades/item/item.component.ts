import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() index: number;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onSelect(index: number) {
    this.selected.emit(index);
  }

}
