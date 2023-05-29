import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-box-center-prefix',
  templateUrl: './comp-box-center-prefix.component.html',
  styleUrls: ['./comp-box-center-prefix.component.scss']
})
export class CompBoxCenterPrefixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.data) {
      const chartValue: any = []
      this.data.list.forEach((item: any) => {
        chartValue.push({ name: item.area, value: item.area_num })
      });
      this.chartValue = chartValue;
    }
  }

  chartValue: any;

  @Input() data: any;
}
