import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private router : Router) {
  }
  innerWidth : number = innerWidth
  closeChat() {
    if (innerWidth > 1100){
      this.router.navigate(['/desktop'])
    }else this.router.navigate(['/mobile'])
  }
}
