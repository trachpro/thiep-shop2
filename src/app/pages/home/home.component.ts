import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // You can also use "$(window).load(function() {"
    $(function () {
      // Slideshow 4
      $("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });

    });
  }

}
