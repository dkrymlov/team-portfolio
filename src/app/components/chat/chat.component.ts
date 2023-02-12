import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Chat} from "../../models/Chat";
import {Message} from "../../models/Message";
import {DatePipe} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit{

  innerWidth = window.innerWidth

  lastMessageFromMe : number = 0;
  lastMessageFromUser : number = 0;
  inputValue : string = ""
  // @ts-ignore
  chat : Chat
  currentTime : string | null  = this.datepipe.transform((new Date), 'shortTime')
  constructor(private router : Router, private route : ActivatedRoute, public datepipe: DatePipe, public authService : AuthService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        console.log(params['chat'])
        if (params['chat'] == 'saved-messages'){
          this.chat = new Chat('saved-messages')
        }else if (params['chat'] == 'about-us'){
          this.chat = new Chat('about-us')
        }
      }
    )
    this.lastMessageFromMe = this.chat.messages.length-1
    // @ts-ignore
    document.getElementById("userInput").placeholder = this.authService.isLoggedIn ? "Write a message..." : "Login to write a message"
  }

  ngAfterViewInit(): void {
  }

  closeChat() {
    if (innerWidth > 1100){
      this.router.navigate(['desktop']).then();
    }else this.router.navigate(['mobile']).then();
  }

  onInputChange(newValue: string) {
    this.inputValue = newValue
  }

  navigate(link: string) {
    window.location.href = link
  }

  sendTextMessage(input: HTMLInputElement) {

    if(input.value != ''){
      this.chat.messages.push(new Message(input.value, '', '', '', this.currentTime, true))
      input.value = ''
      this.lastMessageFromUser = this.chat.messages.length-1

      // @ts-ignore
      document.querySelector(".messages").scrollTo(0, document.querySelector(".messages").scrollHeight+100);
    }

  }

  getChatImage(message: Message, chat: Chat) : string {
    if (!message.fromUser){
      return chat.image
    }else return  'https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png';
  }
}
