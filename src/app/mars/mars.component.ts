import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css'],
})
export class MarsComponent implements OnInit, OnDestroy, AfterViewInit {
  ngAfterViewInit() {
    $(document).ready(function () {
      $.getScript("../assets/scripts/increment.js");
    });
  }

  constructor(
    // … your declarations here
    private router: Router
  ) { }

  ngOnDestroy() {
  }

  ngOnInit(): void {
  }

}
