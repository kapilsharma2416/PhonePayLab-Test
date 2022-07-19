import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  slideOptions1 = {
    initialSlide: 1,
    slidesPerView: 5,
    speed: 500,
  };
  constructor() { }
  slidesDidLoad1(slides: IonSlides): void {
    slides.startAutoplay();
  }
  ngOnInit(): void {
  }

}
