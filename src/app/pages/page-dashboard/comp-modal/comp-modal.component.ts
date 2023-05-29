import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'comp-modal',
  templateUrl: './comp-modal.component.html',
  styleUrls: ['./comp-modal.component.scss']
})
export class CompModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit()
  }

  @Input() visible: any = false;
  @Input() title: any = "";
  @Output() visibleChange = new EventEmitter();
}
