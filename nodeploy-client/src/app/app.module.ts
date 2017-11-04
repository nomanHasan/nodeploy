import { ProjectService } from './services/project.service';
import { CommandService } from './services/command.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';
import { ConsoleService } from './services/console.service';
import { WebsocketService } from './services/websocket.service';
import {HttpClientModule} from '@angular/common/http'

import { FormsModule } from "@angular/forms";
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ConsoleService,
    WebsocketService,
    ProjectService,
    CommandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
