import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'comp-box-swiper2',
  templateUrl: './comp-box-swiper2.component.html',
  styleUrls: ['./comp-box-swiper2.component.scss']
})
export class CompBoxSwiper2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  ngOnChanges() {
    if(this.data) {
      let list = this.data.list;
      this.swiperData = list;
      // clearInterval(this.timer);
      // this.timer = setInterval(() => {
      //   if(list.length > 3) {
      //     this.swiperData = [...this.data.list, ...this.data.list];
      //     if(this.swiperIndex == this.data.list.length - 3) {
      //       this.animationDuration = '0s';
      //       this.swiperIndex = 0;
      //     } else {
      //       this.animationDuration = '0.4s';
      //       this.swiperIndex += 1;
      //     }
      //   } else {
      //     this.swiperData = list;
      //   }
        
      // }, 3000)
    }
  }
  
  onSwiper() {
    const that = this;
    var swiper = new Swiper ('.swiper', {
      // direction: 'horizontal', // 垂直切换选项
      loop: false,
      autoplay: false,
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 10,
			centeredSlides: true,
      direction: "vertical",
    }) 
  }

  changeEmit() {
    this.selectChange.emit();
  }


  timer: any;

  duration: any = 2000;
  animationDuration: any = '0.4s';
  swiperData: any = [];
  swiperIndex: any = 0;
  itemHeight: any = 56.25;

  @Input() data: any;
  @Input() title: any = "";
  @Output() selectChange = new EventEmitter()
}
