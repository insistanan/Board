import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'comp-frame-view',
  templateUrl: './comp-frame-view.component.html',
  styleUrls: ['./comp-frame-view.component.scss']
})
export class CompFrameViewComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.data) {
      this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data);
    }
  }

  hideFrame() {
    this.visible = false;
    this.visibleChange.emit();
  }

  srcUrl: any;

  @Input() visible: any = false;
  @Input() data: any;

  @Output() visibleChange = new EventEmitter();
}
