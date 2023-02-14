import {Message} from "./Message";

export class Chat{
  image: string
  title: string
  subtitle: string
  messages : Array<Message>

  constructor(id : string | null) {

    this.image = "";
    this.title = "";
    this.subtitle = "";
    this.messages = [];

    if (id == 'about'){
      this.image = "/assets/chats/about.png";
      this.title = "About Us";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }else if (id == 'services'){
      this.image = "/assets/chats/services.png";
      this.title = "Our Services";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello2', '', '', '', '22:00', false)
      ];
    }else if (id == 'developer1'){
      this.image = "/assets/chats/developer1.png";
      this.title = "Developer Danylo";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }else if (id == 'developer2'){
      this.image = "/assets/chats/developer3.png";
      this.title = "Developer Artem";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }else if (id == 'contacts'){
      this.image = "/assets/chats/contacts.png";
      this.title = "Contacts";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }else if (id == 'ukraine'){
      this.image = "/assets/chats/ukraine.png";
      this.title = "Our Country";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }else if (id == 'quality'){
      this.image = "/assets/chats/quality.png";
      this.title = "Products Quality";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }else if (id == 'deadlines'){
      this.image = "/assets/chats/timings.png";
      this.title = "Deadlines";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }else if (id == 'team'){
      this.image = "/assets/chats/team.png";
      this.title = "Our Team";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message('Hello1', '', '', '', '22:00', false),new Message('Hello1', '', '', '', '22:00', false),
      ];
    }

  }

}
