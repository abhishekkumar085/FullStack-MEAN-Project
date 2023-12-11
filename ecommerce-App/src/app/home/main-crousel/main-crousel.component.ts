import { Component } from '@angular/core';
import { homeCarouselData } from 'src/Data/mainCarousel';

@Component({
  selector: 'app-main-crousel',
  templateUrl: './main-crousel.component.html',
  styleUrls: ['./main-crousel.component.scss'],
})
export class MainCrouselComponent {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.carouselData = homeCarouselData;
    this.autoPlay()
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
