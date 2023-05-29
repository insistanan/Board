import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-box-swiper',
  templateUrl: './comp-box-swiper.component.html',
  styleUrls: ['./comp-box-swiper.component.scss']
})
export class CompBoxSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.swiperData = [...this.data, ...this.data];
    clearInterval(this.timer);
    this.timer = setInterval(() => {

      if(this.swiperIndex == this.data.length) {
        this.animationDuration = 0;
        this.swiperIndex = 0;
      } else {
        this.animationDuration = 0.4;
        this.swiperIndex += 1;
      }
    }, this.duration)
  }

  timer: any;

  duration: any = 2000;
  animationDuration: any = 0.4;

  swiperData: any = [];

  translateX: any = 0;
  swiperIndex: any = 0;

  @Input() data: any = [];
  @Input() title: any = "";
  @Input() outerImage: any = "";
  @Input() innerImage: any = "";
}
