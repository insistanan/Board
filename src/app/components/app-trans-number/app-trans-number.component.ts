import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-trans-number',
  templateUrl: './app-trans-number.component.html',
  styleUrls: ['./app-trans-number.component.scss']
})
export class AppTransNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const numberArr: any = [];
    const numberPrev: any = [];
    for(let i = 1; i <= this.maxLength; i++) {
      numberArr.push(0);
      numberPrev.push(0)
    }
    this.numberArr = numberArr;
    this.numberPrev = numberPrev;
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentValue: any = changes.value.currentValue;
    const previousValue: any = changes.value.previousValue;
    if(currentValue != previousValue) {
      setTimeout(() => {
        this.getPrevNumber(previousValue);
        this.transNumber();
      }, 100);
    }

  }

  transNumber() {
    const valueArr = this.value.toString().split("");
    valueArr.forEach((item: any, index: any) => {
      this.numberArr[this.numberArr.length - index - 1] = valueArr[valueArr.length - index - 1];
      this.numberArr = JSON.parse(JSON.stringify(this.numberArr))

      setTimeout(() => {
        this.prevNumber = this.numberArr;
      }, 400);
    });
  }

  getPrevNumber(previousValue: any) {
    if(previousValue) {
      const valueArr = previousValue.toString().split("");
      valueArr.forEach((item: any, index: any) => {
        this.numberPrev[this.numberPrev.length - index - 1] = valueArr[valueArr.length - index - 1];
        this.numberPrev = JSON.parse(JSON.stringify(this.numberPrev))
      });
    }

  }

  add() {
    this.value += parseInt((Math.random() * 100).toString())
    this.transNumber();
  }

  numberPrev: any;

  prevNumber: any = [];

  numberArr: any = [];

  allNumber: any = "0123456789";

  allNumberList: any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  @Input() maxLength: any = 6;
  @Input() value: any = 0;
  @Input() background = "";
  @Input() width = 45;
  @Input() height = 60;
  @Input() color = "#FFFFFF";
  @Input() fontSize = 50;
  @Input() fontFamily = "";
  @Input() margin: any = "2px";
  @Input() pointLength: any = 0;
}
