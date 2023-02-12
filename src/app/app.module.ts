import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxNavbarModule} from "ngx-bootstrap-navbar";
import {TabsModule} from "ngx-bootstrap/tabs";
import {MatTabsModule} from "@angular/material/tabs";
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { EmptyRightBarComponent } from './components/empty-right-bar/empty-right-bar.component';
import {MatBadgeModule} from "@angular/material/badge";
import {DatePipe} from "@angular/common";
import { ChatComponent } from './components/chat/chat.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import {MatIconModule} from "@angular/material/icon";
import { HomepageComponent } from './components/homepage/homepage.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AuthService} from "./services/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertModule} from "ngx-bootstrap/alert";
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    EmptyRightBarComponent,
    ChatComponent,
    MenuNavComponent,
    HomepageComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    TabsModule,
    MatTabsModule,
    MatBadgeModule,
    MatIconModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
  ],
  providers: [
    DatePipe,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
