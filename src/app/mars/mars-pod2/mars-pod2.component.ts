import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mars-pod2',
  templateUrl: './mars-pod2.component.html',
  styleUrls: ['./mars-pod2.component.css']
})

export class MarsPod2Component implements OnInit, AfterViewInit {
  ngAfterViewInit() {

    let rov2pic = window.localStorage.getItem("rov2pic");
    let sol2num = window.localStorage.getItem("sol2num");

    if (rov2pic != null) {
      (<HTMLInputElement>document.getElementById("quantity2")).value = rov2pic!;
      (<HTMLInputElement>document.getElementById("sol2")).value = sol2num!;

      //call Rover1()
      this.Rover2()
    }
  }
  constructor() { }

  ngOnInit(): void {
  }


  Rover2() {
    var sol2 = (<HTMLInputElement>document.querySelector("#sol2"))!.value

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sol2}&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
      .then(response => response.json())
      .then(data => {
        let length = Object.keys(data.photos).length;

        if (length > 100) {
          length = 100
        }

        let quantity = (<HTMLInputElement>document.querySelector("#quantity2"))!.value

        if ((length > 0) && (data.photos[quantity] != null)) {
          var date = data.photos[quantity].earth_date
          var url = data.photos[quantity].img_src;

          if (url != null) {
            let imgsrc = '<img src="' + url + '">';
            document.getElementById("sol2picdiv")!.innerHTML = imgsrc;
            (<HTMLInputElement>document.getElementById("sol2date"))!.value = date;
          } else {
            (<HTMLInputElement>document.getElementById("sol2date"))!.value = "no images";
          }
        } else {
          (<HTMLInputElement>document.getElementById("sol2date"))!.value = "no data";
        }

        //store data in localstorage for persistence
        window.localStorage.setItem("rov2pic", (<HTMLInputElement>document.getElementById("quantity2"))!.value);
        window.localStorage.setItem("sol2num", (<HTMLInputElement>document.getElementById("sol2"))!.value);

        console.log("size is " + length);
        console.log(data);
      });
  }


}
