import { CalendarOptions } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})


export class AppointmentComponent implements OnInit {
  title = "My Appointments";
  myevents: string='';
  userdata = JSON.parse(localStorage.getItem('user'));
  y =11; 
//parseInt(this.userdata.id);
  x =1;
   CalendarOptions
//parseInt(this.userdata.utype);
  edata = {
   uid : this.y,
   utype : this.x
  }


  urle ="https://afyabackendapi.herokuapp.com/eventsmanager/events/";
  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit(){
   this.loadevents();
     


  }


  if (userdata: any){
   this.router.navigate(['login']);
  }

loadevents(){
       this.http.post(this.urle, this.edata).toPromise().then((allevents) => {
       this.myevents =  JSON.stringify(allevents) ;
});

}

    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    customButtons: {
         myCustomButton: {
         text: 'Book Appointment',
         click: this.addeventfunction.bind(this),
       }
     },


    headerToolbar: {
      right: 'today prev,next',
      left: 'title',
      center:'myCustomButton'
    },

    dayMaxEvents: true, // allow "more" link when too many events
    editable   : true,
    events  : this.myevents
// [{"title":"my event","date":"2020-10-17"},{"title":"event1","date":"2020-11-01"}]
// this.myevents,
 };

    handleDateClick(arg: { dateStr: any; }) {
    window.localStorage.setItem('editevent',JSON.stringify( arg.dateStr ));
    this.router.navigate(['editevent']);
  }
     addeventfunction(){
     this.router.navigate(['addevent']);

  }

}
