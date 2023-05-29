import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-box-num-large',
  templateUrl: './comp-box-num-large.component.html',
  styleUrls: ['./comp-box-num-large.component.scss']
})
export class CompBoxNumLargeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: any;
  @Input() data: any = 0;
  @Input() data1: any = 0;
}
