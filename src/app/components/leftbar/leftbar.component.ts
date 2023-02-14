import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ChatPreview} from "../../models/ChatPreview";
import {Observable, of} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit{
  currentRoute = "/desktop"
  innerWidth = innerWidth

  currentTime : string | null  = this.datepipe.transform((new Date), 'shortTime')

  //rootPath : string = innerWidth < 1100 ? 'mobile' : '/desktop'

  constructor(private datepipe: DatePipe, private router: Router, private route : ActivatedRoute, public authService : AuthService) {

  }

  chats : Array<ChatPreview> = [
    new ChatPreview('about', '/assets/chats/about.png', 'About Us', 'We are...', this.currentTime, true),
    new ChatPreview('services', '/assets/chats/services.png', 'Our Services', 'What we can do for you', this.currentTime, true),
    new ChatPreview('deadlines', '/assets/chats/timings.png', 'Deadlines', 'How fast we can work', this.currentTime, true),
    new ChatPreview('quality', '/assets/chats/quality.png', 'Products Quality', 'Thing we proud of', this.currentTime, true),
    new ChatPreview('team', '/assets/chats/team.png', 'Our Team', 'Our developers', this.currentTime, true),
    new ChatPreview('developer1', '/assets/chats/developer1.png', 'Developer Danylo', 'Hello, I`m a...', this.currentTime, true),
    new ChatPreview('developer2', '/assets/chats/developer3.png', 'Developer Artem', 'Whats up! My name...', this.currentTime, true),
    new ChatPreview('contacts', '/assets/chats/contacts.png', 'Contacts', 'Contact us', this.currentTime, true),
    new ChatPreview('ukraine', '/assets/chats/ukraine.png', 'Stand with Ukraine', 'Our Country', this.currentTime, true),
  ]
  filteredChats : Observable<ChatPreview[]> = of(this.chats)
  filterChats(value: string) {
    if (!value){
      this.filteredChats = of(this.chats)
    }else this.filteredChats = of(this.chats.filter(chat => chat.title.toLowerCase().includes(value.toLowerCase()) || chat.subtitle.toLowerCase().includes(value.toLowerCase())))
  }

  ngOnInit(): void {
    if (document.URL.includes('mobile')){
      this.currentRoute = '/mobile'
    }else this.currentRoute = '/desktop'
    // @ts-ignore
    document.getElementById('searchInChats').placeholder = this.authService.isLoggedIn ? "Search" : "Login to search"
  }

  getObservableLength(observable : Observable<any>) : number{
    let length = 0
    observable.subscribe(data => {
      length = data.length
    })
    return length
  }

  routeTo(id: string) {
    if (innerWidth > 1100){
      this.router.navigate(['/desktop', id]).then()
    }else this.router.navigate(['/mobile', id]).then()
  }

}

