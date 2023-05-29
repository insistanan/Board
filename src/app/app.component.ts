import { Component, OnInit } from '@angular/core';
import { TApplication } from './services/application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private app: TApplication) {}
  ngOnInit(): void {
    this.getScale();
    window.addEventListener("resize", this.getScale);
  }

  getScale=() => {
    const width = 6016, height = 1280;
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    this.scale = ww<wh?ww: wh;
  }

  scale: any = 1;
}
