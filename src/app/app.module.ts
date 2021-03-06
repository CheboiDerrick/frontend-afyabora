import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddeventComponent } from './addevent/addevent.component';
import { EditeventComponent } from './editevent/editevent.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RegisteruserService } from './registeruser.service';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import { FormsModule } from '@angular/forms';
import { VideocallComponent } from './videocall/videocall.component';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AppointmentComponent,
    AddeventComponent,
    HomeComponent,
    EditeventComponent,
    VideocallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    FlexLayoutModule,
    FullCalendarModule,
    FormsModule,
    NgbModule,
    NgxAgoraModule.forRoot({ AppID: environment.agora.appId }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
