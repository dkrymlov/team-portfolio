import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  setProfileImage(url : string){
    localStorage.setItem('profile-image', url)
  }

  getProfileImage() : string | null{
    return localStorage.getItem('profile-image')
  }

  setName(name : string){
    localStorage.setItem('profile-name', name)
  }

  getDefaultProfileImage() : string{
    return '/assets/chats/user.png'
  }

  getDefaultProfileName() : string{
    return 'User'
  }
  getProfileName() : string | null{
    // @ts-ignore
    return localStorage.getItem('profile-name')
  }

}
