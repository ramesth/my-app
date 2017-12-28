import {Injectable} from '@angular/core'
import { Component } from '@angular/core';
import { Person } from './person';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {IPerson,IPersonResponse} from "./interfaces"


@Injectable()
export class UsersComponent { 
  constructor(public http: Http) { }
  
 // public persons: any;
 //public person:Person;
 /*
  getUsers():Observable<IPerson[]> {
   return this.http.get<IPerson[]>('http://localhost:3000/users')
     .map((persons:IPerson[]) => { return persons;});

     
  }
  */
  getUser(){
    return this.http.get('http://localhost:3000/users',{})
        .map((res:Response)=>{let persons=res.json()}).catch(this.handleError);
  }
  /*
  postUser(person:Person) {
    var headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:3000/users',JSON.stringify(person))
    .subscribe();
    
      //.subscribe((res: any) => {
      //  this.persons = res;
      //});
   }
  */
  private handleError(error:any){
    console.error("server error");
    let errorMessage=error.json().error;
    return Observable.throw(errorMessage);
  }
}