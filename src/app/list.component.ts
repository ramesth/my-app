import {Component, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {UsersComponent} from './users.service';
import { Person } from './person';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-list',
   templateUrl: './list.component.html'
   
  
  })

  export class ListComponent implements OnInit{
    
     //persons:Person[];
    users:Person[];
    user:Person;
   
   
    str1:Object;
    userObject:Object;
  

  
    
  
   
    constructor(public http: Http, public userService: UsersComponent) { 
   
      this.getUsers();
      
   
    }

    ngOnInit(){
        //called after the constructor and called  after the first ngOnChanges() 
     }
   
    
      convertObjToUser(inObj:Object):Person[]{
        // converting Objtoperson type
         var user1:Person[]=[];
          user1 = Object.keys(inObj).map(function(k) {
          return inObj[k]
         });
              
         return user1;
        }
        
        getUsers() { 
            this.userService.getUserData() 
            .then(data => { 
                this.userObject = data;
                this.users= this.convertObjToUser(this.userObject);
                 
             } ); 
            } 
        
    
    
      
    onDelete(_id){
      console.log("id"+_id);
      this.userService.deleteUserProfile(_id);
      this.getUsers();
  
    }
   
  }