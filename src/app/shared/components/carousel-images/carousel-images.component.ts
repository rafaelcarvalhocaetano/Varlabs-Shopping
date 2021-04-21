import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Image } from 'src/app/core/models/product';

@Component({
  selector: 'app-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.scss']
})
export class CarouselImagesComponent implements OnInit {

  @ViewChild('arrow_scroll') arrow_scroll: ElementRef;

  @Input() public listImges: Image[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  public scrollUp(): void {
    this.arrow_scroll.nativeElement.scrollTop -= 140;
  }

  public scrollDown(): void {
    this.arrow_scroll.nativeElement.scrollTop += 140;
  }


}
