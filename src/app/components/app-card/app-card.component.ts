import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: any = "卡片标卡片标题题";
  @Input() isTitle: any = true;
}
