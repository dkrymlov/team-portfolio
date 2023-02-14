import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnInit,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Chat} from "../../models/Chat";
import {Message} from "../../models/Message";
import {DatePipe} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {MessagesService} from "../../services/messages.service";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, DoCheck{

  innerWidth = window.innerWidth

  lastMessageFromMe : number = 0;
  lastMessageFromUser : number = 0;
  inputValue : string = ""
  // @ts-ignore
  chat : Chat
  currentTime : string | null  = this.datepipe.transform((new Date), 'shortTime')

  firstChatMessagesLenght : number = 0

  key : string = ''
  constructor(private settingsService : SettingsService, private router : Router, private route : ActivatedRoute, public datepipe: DatePipe, public authService : AuthService, private messagesService : MessagesService) {

  }

  ngOnInit(): void {

    this.messagesService.initMessages()

    this.route.params.subscribe(
      (params : Params) => {
        console.log(params['chat'])
        if (params['chat'] == 'about'){
          this.chat = new Chat('about')
          this.key = 'about'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }else if (params['chat'] == 'services'){
          this.chat = new Chat('services')
          this.key = 'services'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        } else if (params['chat'] == 'team'){
          this.chat = new Chat('team')
          this.key = 'team'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }else if (params['chat'] == 'deadlines'){
          this.chat = new Chat('deadlines')
          this.key = 'deadlines'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }else if (params['chat'] == 'quality'){
          this.chat = new Chat('quality')
          this.key = 'quality'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }else if (params['chat'] == 'developer1'){
          this.chat = new Chat('developer1')
          this.key = 'developer1'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }else if (params['chat'] == 'developer2'){
          this.chat = new Chat('developer2')
          this.key = 'developer2'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }else if (params['chat'] == 'contacts'){
          this.chat = new Chat('contacts')
          this.key = 'contacts'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }else if (params['chat'] == 'ukraine'){
          this.chat = new Chat('ukraine')
          this.key = 'ukraine'
          let userMessages : string[] = this.messagesService.getMessages(this.key)
          this.lastMessageFromUser = userMessages.length
          this.lastMessageFromMe = this.chat.messages.length-1

          for (let i = 0; i < userMessages.length; i++) {

            this.chat.messages.push(new Message(userMessages[i], '', '', '', this.currentTime, true))
          }
        }
      }
    )
    //this.firstChatMessagesLenght = this.chat.messages.length


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

      this.messagesService.sendMessage(this.key, input.value)

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
    }else if (message.fromUser && this.settingsService.getProfileImage() !== null){
      // @ts-ignore
      return this.settingsService.getProfileImage()
    }else return this.settingsService.getDefaultProfileImage()
  }

  ngAfterContentChecked(): void {

    console.log("content checked")
  }

  ngAfterViewChecked(): void {
  }

  ngDoCheck(): void {

  }

}
