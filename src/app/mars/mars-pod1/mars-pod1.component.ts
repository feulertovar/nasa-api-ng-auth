import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mars-pod1',
  templateUrl: './mars-pod1.component.html',
  styleUrls: ['./mars-pod1.component.css']
})
export class MarsPod1Component implements OnInit, AfterViewInit {
  ngAfterViewInit() {

    let rov1pic = window.localStorage.getItem("rov1pic");
    let sol1num = window.localStorage.getItem("sol1num");

      if (rov1pic != null) {
        (<HTMLInputElement>document.getElementById("quantity")).value = rov1pic!;
        (<HTMLInputElement>document.getElementById("sol")).value = sol1num!;

        //call Rover1()
       this.Rover1()
      }
  }
  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  Rover1() {
    var sol = (<HTMLInputElement>document.querySelector("#sol"))!.value

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
      .then(response => response.json())
      .then(data => {
        let length = Object.keys(data.photos).length;

        if (length > 100) {
          length = 100
        }

        let quantity = (<HTMLInputElement>document.querySelector("#quantity"))!.value

        if ((length > 0) && (data.photos[quantity] != null)) {
          var date = data.photos[quantity].earth_date
          var url = data.photos[quantity].img_src

          if (url != null) {
            let imgsrc = '<img src="' + url + '">';
            document.getElementById("sol1picdiv")!.innerHTML = imgsrc;
            (<HTMLInputElement>document.getElementById("sol1date"))!.value = date;
          } else {
            (<HTMLInputElement>document.getElementById("sol1date"))!.value = "no images";
          }
        } else {
          (<HTMLInputElement>document.getElementById("sol1date"))!.value = "no images";
        }

        //store data in localstorage for persistence
        window.localStorage.setItem("rov1pic", (<HTMLInputElement>document.getElementById("quantity"))!.value);
        window.localStorage.setItem("sol1num", (<HTMLInputElement>document.getElementById("sol"))!.value);

        console.log("size is " + length);
        console.log(data);
      });
  }
}
