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

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    EmptyRightBarComponent,
    ChatComponent,
    MenuNavComponent,
    HomepageComponent,
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
    ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
