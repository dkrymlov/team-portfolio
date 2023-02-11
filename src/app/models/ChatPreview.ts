import {DatePipe} from "@angular/common";

export class ChatPreview {
  id: string
  image: string
  title : string
  subtitle : string
  time: string | null
  pinned: boolean

  constructor(id : string, image: string, title: string, subtitle : string, currentTime : string | null, pinned : boolean) {
    this.id = id;
    this.image = image
    this.title = title
    this.subtitle = subtitle
    this.time = currentTime
    this.pinned = pinned

  }

}
