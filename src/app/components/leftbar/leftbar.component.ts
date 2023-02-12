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

  rootPath : string = innerWidth < 1100 ? 'mobile' : '/desktop'

  constructor(private datepipe: DatePipe, private router: Router, private route : ActivatedRoute, public authService : AuthService) {

  }

  chats : Array<ChatPreview> = [
    new ChatPreview('saved-messages', 'https://telega-blog.ru/wp-content/uploads/2022/09/kto-vidit-izbrannoe-telegram.jpg', 'Saved Messages', 'Messages you have saved', this.currentTime, true),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
    new ChatPreview('about-us', 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png', 'About Us', 'We are fast growing...',  this.currentTime, false),
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

