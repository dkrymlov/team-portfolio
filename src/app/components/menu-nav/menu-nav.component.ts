import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent {

  openSideNav() {
    // @ts-ignore
    document.getElementById('side-nav').style.width = '100%'
    // @ts-ignore
    document.getElementById('empty-space').style.width = '100%'
    // @ts-ignore
    document.getElementById('menu').style.width = '280px'
  }

  closeSideNav() {
    // @ts-ignore
    document.getElementById('menu').style.width = '0'
    // @ts-ignore
    document.getElementById('empty-space').style.width = '0'

    // @ts-ignore
    document.getElementById('side-nav').style.width = '0'
  }
}
