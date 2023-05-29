import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TApiAppService } from 'src/app/services/app_service';

@Component({
  selector: 'comp-box-video',
  templateUrl: './comp-box-video.component.html',
  styleUrls: ['./comp-box-video.component.scss']
})
export class CompBoxVideoComponent implements OnInit {

  constructor(private Svc: TApiAppService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.data) {
      this.Svc.winList(this.data).then(res => {
        if(res) {
          this.imgUrls = res.img_list;
          this.linkUrls = res.url_list;
          if(this.data == 2 || this.data == 4 || this.data == 6) {
            this.timer = setInterval(() => {
              if(this.swiperIndex < this.imgUrls.length - 1) {
                this.swiperIndex ++
              } else {
                this.swiperIndex = 0;
              }
            }, 5000)
          }

        }
      })
    }
  }

  showIFrame() {
    // this.linkUrls[this.swiperIndex] = "https://ng.ant.design/components/icon/zh"
    if(this.linkUrls[this.swiperIndex]) {
      this.onShowIFrame.emit(this.linkUrls[this.swiperIndex])
    }
  }

  showPPT() {
    let urls: any;
    if(this.imgUrls.length >= 6) {
      urls = this.imgUrls.slice(this.imgUrls.length - 6, this.imgUrls.length);
    } else {
      urls = this.imgUrls
    }
    console.log(urls)
    this.onShowPPT.emit(this.imgUrls);
  }

  timer: any;

  translateX: any = 0;
  transDuration: any = "0.4s"

  swiperIndex: any = 0;

  imgUrls: any = [];
  linkUrls: any = [];

  @Input() data: any;

  @Output() onShowIFrame = new EventEmitter();
  @Output() onShowPPT = new EventEmitter();
}
