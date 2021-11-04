import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor( private http: HttpClient ) { }

  registerusers(userData){
    return this.http.post('https://afyabackendapi.herokuapp.com/signupmanager/insertuser/', userData)
  }

}
