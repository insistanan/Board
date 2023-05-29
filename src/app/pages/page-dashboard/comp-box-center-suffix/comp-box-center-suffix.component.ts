import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-box-center-suffix',
  templateUrl: './comp-box-center-suffix.component.html',
  styleUrls: ['./comp-box-center-suffix.component.scss']
})
export class CompBoxCenterSuffixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.value = 100;
    }, 500);
  }

  count: any = 0;

  value: any = 0

  @Input() data: any = [];
}
