import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  // Se puede agregar segun interface en ng-simple-slideshow page.
  imageUrlArray = [
    'assets/Images/img1.jpg',
    'assets/Images/img2.jpg',
    'assets/Images/img3.jpg',
    'assets/Images/img4.jpg',
    'assets/Images/img5.jpg'
  ];


  constructor() { }

  ngOnInit() {
  }

}
