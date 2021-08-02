import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'taskCloud';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      console.log(url);
    })
  }
}
