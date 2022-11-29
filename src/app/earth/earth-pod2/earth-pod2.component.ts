import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth-pod2',
  templateUrl: './earth-pod2.component.html',
  styleUrls: ['./earth-pod2.component.css']
})
export class EarthPod2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ResPic() {
    let imgsrc = '<img src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=5EmBpNc4trSW8OKwkmx3jnEPhfrIcwzfrddLkqtf">';
    document.getElementById("respicdiv")!.innerHTML = imgsrc;

  }

}
