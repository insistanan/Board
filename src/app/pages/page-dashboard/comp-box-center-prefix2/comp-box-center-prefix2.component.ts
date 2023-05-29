import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'comp-box-center-prefix2',
  templateUrl: './comp-box-center-prefix2.component.html',
  styleUrls: ['./comp-box-center-prefix2.component.scss']
})
export class CompBoxCenterPrefix2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  changeEmit() {
    this.selectChange.emit()
  }

  @Input() dataA: any;
  @Input() dataB: any;
  @Output() selectChange = new EventEmitter();
}
