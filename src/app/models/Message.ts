export class Message{
  text : string
  image : string
  link : string
  video : string
  time : string | null

  fromUser: boolean

  constructor(text: string, image: string, link: string, video: string, time: string | null, fromUser : boolean) {
    this.text = text;
    this.image = image;
    this.link = link;
    this.video = video;
    this.time = time;
    this.fromUser = fromUser;
  }
}
