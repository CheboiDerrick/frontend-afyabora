import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor( private http: HttpClient ) { }

  registerusers(userData){
    return this.http.post('http://127.0.0.1:8000/signupmanager/insertuser/', userData)
  }

}
