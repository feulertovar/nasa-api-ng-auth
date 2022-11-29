import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars-pod3',
  templateUrl: './mars-pod3.component.html',
  styleUrls: ['./mars-pod3.component.css']
})
export class MarsPod3Component implements OnInit , AfterViewInit {
  ngAfterViewInit() {

    let rov3pic = window.localStorage.getItem("rov3pic");
    let sol3num = window.localStorage.getItem("sol3num");

      if (rov3pic != null) {
        (<HTMLInputElement>document.getElementById("quantity3")).value = rov3pic!;
        (<HTMLInputElement>document.getElementById("sol3")).value = sol3num!;

        //call Rover1()
       this.Rover3()
      }
  }
  constructor() { }

  ngOnInit(): void {

  }

  Rover3() {
    var sol3 = (<HTMLInputElement>document.querySelector("#sol3"))!.value

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sol3}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
      .then(response => response.json())
      .then(data => {
        let length = Object.keys(data.photos).length;

        if (length > 100) {
          length = 100
        }
        let quantity = (<HTMLInputElement>document.querySelector("#quantity3"))!.value

        if ((length > 0) && (data.photos[quantity] != null)) {
          var date = data.photos[quantity].earth_date;
          var url = data.photos[quantity].img_src;

          if (url != null) {
            let imgsrc = '<img src="' + url + '">';
            (<HTMLInputElement>document.getElementById("sol3picdiv"))!.innerHTML = imgsrc;
            (<HTMLInputElement>document.getElementById("sol3date"))!.value = date;
          } else {
            (<HTMLInputElement>document.getElementById("sol3date"))!.value = "no images";
          }
        } else {
          (<HTMLInputElement>document.getElementById("sol3date"))!.value = "no data";
        }
        //store data in localstorage for persistence
        window.localStorage.setItem("rov3pic", (<HTMLInputElement>document.getElementById("quantity3"))!.value);
        window.localStorage.setItem("sol3num", (<HTMLInputElement>document.getElementById("sol3"))!.value);

        console.log("size is " + length);
        console.log(data);
      });
  }

}
