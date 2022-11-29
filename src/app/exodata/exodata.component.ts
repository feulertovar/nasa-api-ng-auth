import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exodata',
  templateUrl: './exodata.component.html',
  styleUrls: ['./exodata.component.css']
})
export class ExodataComponent implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    $(document).ready(function () {
      $.getScript("../assets/scripts/datepick.js");
    });
  }
  constructor() { }

  ngOnInit(): void {
  }
}
