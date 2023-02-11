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

    if (id == 'saved-messages'){
      this.image = "https://telega-blog.ru/wp-content/uploads/2022/09/kto-vidit-izbrannoe-telegram.jpg";
      this.title = "Saved Messages";
      this.subtitle = "last seen recently";
      this.messages = [
        new Message("Hello and welcome to out chat! Hello and welcome to out chat! Hello and welcome to out chat! Hello and welcome to out chat!", "", "", "", "10:03", false),
        new Message("", "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg", "", "", "10:03", false),
        new Message("", "", "", "https://www.youtube.com/watch?v=ynLUOjXROL8", "", false),
        new Message("Hello and welcome to out chat! Hello and welcome to out chat! Hello and welcome to out chat! Hello and welcome to out chat!", "", "", "", "10:03", false),
        new Message("", "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg", "", "", "10:03", false),
        new Message("", "", "", "https://www.youtube.com/watch?v=ynLUOjXROL8", "", false),
      ];
    }if (id == 'about-us'){
      this.image = "https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png";
      this.title = "About Us";
      this.subtitle = "last seen recently";
      this.messages = [];
    }

  }

}
