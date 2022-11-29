import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth-pod3',
  templateUrl: './earth-pod3.component.html',
  styleUrls: ['./earth-pod3.component.css']
})
export class EarthPod3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  GeoPic() {
    var lon = (<HTMLInputElement>document.querySelector("#longitude"))!.value
    var lat = (<HTMLInputElement>document.querySelector("#latitude"))!.value
    var geoDay = $("#geoDay").data('daterangepicker').startDate.format('YYYY-MM-DD');

    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${geoDay}&dim=0.15&api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf`)
      .then(response => response.json())
      .then(data => {
        let imgsrc = '<img src="' + data.url + '">';
        document.getElementById("geopicdiv")!.innerHTML = imgsrc;

        console.log(geoDay);
        console.log(data);
      });
  }

}
