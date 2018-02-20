import {Component} from '@angular/core';
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
    selector: 'app-home',
   templateUrl: './home.component.html'
   
  
  })

  export class HomeComponent{
    title = 'app';
    name:String="Enter Name";
    age:Number=10;
    email:String="zzz@ssss.com";
    
   
    //persons:Person[];
    users:Person[];
    user:Person;
   
   
    str1:Object;
    userObject:Object;
    t1:Number=0;
  
    
  
   
    constructor(public http: Http,  public userService: UsersComponent) { };
    ngOnInit() {
           
    }
    onGo()
    {
  
      this.getUsers();
     
    }
    convertObjToPersons(inObj:Object):Person[]{
      // converting Objtoperson type
       var persons1:Person[]=[];
       persons1 = Object.keys(inObj).map(function(k) {
        return inObj[k]
       });
            
       return persons1;
      }
      convertObjToUser(inObj:Object):Person[]{
        // converting Objtoperson type
         var user1:Person[]=[];
          user1 = Object.keys(inObj).map(function(k) {
          return inObj[k]
         });
              
         return user1;
        }
   
    getUsers(): void {
         // console.log(this.app_url+'/userProfile');
          this.http.request('/api/user')
            .subscribe((res: Response) => {
              this.userObject = res.json();
              this.users= this.convertObjToUser(this.userObject);
      
            });
    }
   
      postUserProfile(user:Person) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/user',user,{ headers: headers}).subscribe();
            
        }
    
      deleteUserProfile(_id) {
        console.log('in delete');
        //return this.http.delete('http://localhost:3000/users/5a297dcdb9cbe131e4a19d6a');
        return this.http.delete('/api/user/'+_id).subscribe((res) => {
        });
      }
    onDelete(_id){
      console.log("id"+_id);
      this.deleteUserProfile(_id);
      this.getUsers();
  
    }
    onSubmit() { 
      
      this.title="next ";
      //this.person=new Person('KritiThapa');
      //this.postUser(this.person);
      this.userService.postUserProfile(new Person(this.name,this.age,this.email));
      //this.getUsers();
    
  
        
    }


  }