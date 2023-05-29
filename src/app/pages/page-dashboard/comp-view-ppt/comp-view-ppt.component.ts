import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comp-view-ppt',
  templateUrl: './comp-view-ppt.component.html',
  styleUrls: ['./comp-view-ppt.component.scss']
})
export class CompViewPptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges() {
  }

  hideFrame() {
    this.visible = false;
    this.visibleChange.emit();
    setTimeout(() => this.swiperIndex = 0, 400);
  }

  prev() {
    if(this.swiperIndex == 0) return;
    this.swiperIndex --;
  }

  next() {
    if(this.swiperIndex == this.data?.length - 1) return;
    this.swiperIndex ++;
  }

  srcUrl: any;
  swiperIndex: any = 0;

  @Input() visible: any = false;
  @Input() data: any = [];

  @Output() visibleChange = new EventEmitter();
}
