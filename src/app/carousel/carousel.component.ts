import { Component, OnInit } from '@angular/core';


function MarsCarousel0(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=980&page=1&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
  .then(response => response.json())
  .then(data => {

      let imgsrc = '<img src="' + data.photos[10].img_src + '">';
      document.getElementById("mars0")!.innerHTML = imgsrc;
      console.log(data.photos[0].img_src);
  });
}

function MarsCarousel1(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=400&page=1&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
  .then(response => response.json())
  .then(data => {

      let imgsrc = '<img src="' + data.photos[10].img_src + '">';
      document.getElementById("mars1")!.innerHTML = imgsrc;
      console.log(data.photos[1].img_src);
  });
}

function MarsCarousel2(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=150&page=1&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
  .then(response => response.json())
  .then(data => {

      let imgsrc = '<img src="' + data.photos[10].img_src + '">';
      document.getElementById("mars2")!.innerHTML = imgsrc;
      console.log(data.photos[2].img_src);
  });
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.addEventListener("DOMContentLoaded", event => {
      MarsCarousel0();
      MarsCarousel1();
      MarsCarousel2();
    });

  }

}
