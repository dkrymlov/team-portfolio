import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
  }

  initMessages(){

    let emptyArray : string[] = []

    if (!localStorage.getItem('about')){
      localStorage.setItem('about', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('services')){
      localStorage.setItem('services', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('deadlines')){
      localStorage.setItem('deadlines', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('quality')){
      localStorage.setItem('quality', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('team')){
      localStorage.setItem('team', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('developer1')){
      localStorage.setItem('developer1', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('developer2')){
      localStorage.setItem('developer2', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('contacts')){
      localStorage.setItem('contacts', JSON.stringify(emptyArray))
    }
    if (!localStorage.getItem('ukraine')){
      localStorage.setItem('ukraine', JSON.stringify(emptyArray))
    }

  }
  sendMessage(key: string, message: string){
    // @ts-ignore
    let item : string[] = JSON.parse(localStorage.getItem(key))
    item.push(message)
    localStorage.setItem(key, JSON.stringify(item))
  }

  getMessages(key : string) : string[]{
    // @ts-ignore
    return JSON.parse(localStorage.getItem(key))
  }


}
