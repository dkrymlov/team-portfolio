import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmptyRightBarComponent} from "./components/empty-right-bar/empty-right-bar.component";
import {LeftbarComponent} from "./components/leftbar/leftbar.component";
import {ChatComponent} from "./components/chat/chat.component";
import {SettingsComponent} from "./components/settings/settings.component";

const routes: Routes = [
  {path: 'desktop', component: EmptyRightBarComponent},
  {path: 'mobile', component: LeftbarComponent},
  {path: 'desktop/:chat', component: ChatComponent},
  {path: 'mobile/:chat', component: ChatComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
