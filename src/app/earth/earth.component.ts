import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    $(document).ready(function () {
      $.getScript("../assets/scripts/datepick.js");
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
