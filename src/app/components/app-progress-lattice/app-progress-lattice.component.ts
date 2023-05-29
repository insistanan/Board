import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-lattice',
  templateUrl: './app-progress-lattice.component.html',
  styleUrls: ['./app-progress-lattice.component.scss']
})
export class AppProgressLatticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    setTimeout(() => {
      this.value = this.percentValue;
      if(this.width) this.latticeNum = parseInt((this.width / 18).toString());
    }, 200);
  }

  value: any = 0;
  latticeNum: any = 0;

  @Input() percentValue: any = 0;
  @Input() numberValue: any = 0;
  @Input() title: any = "";
  @Input() index: any = 0;
  @Input() width: any = 0;
  
}
