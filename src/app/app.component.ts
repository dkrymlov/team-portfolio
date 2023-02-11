import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'material-design';

  constructor(private router: Router) {
  }
  innerWidth = window.innerWidth

  loggedIn : boolean = false;

  ngOnInit(): void {
    if (innerWidth < 1100){
      this.router.navigate(['mobile']).then();
    }else if (innerWidth > 1100) this.router.navigate(['desktop']).then();
  }

  onActionChanges( $event : boolean) {
    console.log($event)
    this.loggedIn = $event
  }

}
