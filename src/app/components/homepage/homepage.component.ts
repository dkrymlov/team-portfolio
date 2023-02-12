import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  innerWidth: number = innerWidth;

  err : boolean = false;
  loggedIn : boolean = this.authService.isLoggedIn

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private authService : AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  routeSkip() {
    this.newItemEvent.emit(true)
  }

  openLogin() {
    // @ts-ignore
    document.getElementById('login').style.height = '100%'
  }

  openRegister() {
    // @ts-ignore
    document.getElementById('register').style.height = '100%'
  }

  login(email: string, password: string) {
    let err = this.authService.SignIn(email, password)
    console.log(err)
    if (err == undefined){
      this.err = true
    }
  }

  loginWithGoogle() {
    this.authService.GoogleAuth().then(r => {})
  }

  register(email: string, password: string) {
    this.authService.SignUp(email, password).then(r => {
      this.login(email,password)
    })

  }

  closeLoginForm() {
    // @ts-ignore
    document.getElementById('login').style.height = 0
  }

  closeRegisterForm() {
    // @ts-ignore
    document.getElementById('register').style.height = 0;
  }
}
