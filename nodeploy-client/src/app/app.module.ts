import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';
import { ConsoleService } from './services/console.service';
import { WebsocketService } from './services/websocket.service';


import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ConsoleService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
