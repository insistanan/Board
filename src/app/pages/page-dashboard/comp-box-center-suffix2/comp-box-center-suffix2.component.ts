import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'comp-box-center-suffix2',
  templateUrl: './comp-box-center-suffix2.component.html',
  styleUrls: ['./comp-box-center-suffix2.component.scss']
})
export class CompBoxCenterSuffix2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeEmit() {
    this.selectChange.emit()
  }

  @Input() dataA: any = [];
  @Input() dataB: any = [];
  @Output() selectChange = new EventEmitter();
}
