import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  innerWidth: number = innerWidth;

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  routeSkip() {
    console.log("skip")
    this.newItemEvent.emit(true)
  }
}
