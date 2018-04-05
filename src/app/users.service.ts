
import {Component,Injectable} from '@angular/core';
import {Person} from './person';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';




@Injectable()
export class  UsersComponent{ 
  
  constructor(public http: Http) { }
   //persons:Person[];
  users:Person[];
  str1:Object;
  userObject:Object;
  getUserData()  
  {    
     return this.http.get('api/user')
     .toPromise()
     .then(response => response.json());
  } 
  
  postUserProfile(user:Person) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('/api/user',user,{ headers: headers}).subscribe();
        
    }
  
  deleteUserProfile(_id) {
    console.log('in delete');
    return this.http.delete('/api/user/'+_id).subscribe((res) => {
    });
  }

 
}