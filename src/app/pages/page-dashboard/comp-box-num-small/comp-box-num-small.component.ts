import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-box-num-small',
  templateUrl: './comp-box-num-small.component.html',
  styleUrls: ['./comp-box-num-small.component.scss']
})
export class CompBoxNumSmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.data != undefined) {
      const valueStr = this.data.toString().split("");
      const valueStrlength = valueStr.length;
      for(let i = 0; i < 5-valueStrlength; i ++) {
        valueStr.unshift("0")
      }

      this.valueStr = valueStr;
    }
  }

  valueStr: any = [];

  @Input() title: any;
  @Input() data: any;
}
