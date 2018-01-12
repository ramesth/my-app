import { Component,OnInit } from '@angular/core';
import { Person } from './person';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {UsersComponent} from './users.service';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import {PersonProfile} from './personProfile';



@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name:String="Enter Name";
  age:Number=10;
  email:String="zzz@ssss.com";
  app_url="https://angramtest.azurewebsites.net:443";
 
  persons:Person[];
  users:PersonProfile[];
  user:PersonProfile;
 
 
  str1:Object;
  userObject:Object;
  t1:Number=0;

  

 
  constructor(public http: Http) { };
  ngOnInit() {
    
     this.getUsers();
  
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
    convertObjToUser(inObj:Object):PersonProfile[]{
      // converting Objtoperson type
       var user1:PersonProfile[]=[];
        user1 = Object.keys(inObj).map(function(k) {
        return inObj[k]
       });
            
       return user1;
      }
 
  getUsers(): void {
        console.log(this.app_url+'/userProfile');
        this.http.request(this.app_url+'/userProfile')
          .subscribe((res: Response) => {
            this.userObject = res.json();
            this.users= this.convertObjToUser(this.userObject);
    
          });
  }
 
    postUserProfile(user:PersonProfile) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.app_url+'/userProfile',user,{ headers: headers}).subscribe();
          
      }
  
    deleteUserProfile(_id) {
      console.log('in delete');
      //return this.http.delete('http://localhost:3000/users/5a297dcdb9cbe131e4a19d6a');
      return this.http.delete(this.app_url+'/userProfile/'+_id).subscribe((res) => {
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
    this.postUserProfile(new PersonProfile(this.name,this.age,this.email));
    this.getUsers();
    //this._customerService.postUser(this.person);
    //this.http.get('http://localhost:3000/users');
    //this.person = {name:"123df",age:21,email:"asdfasdf"};
    //this.persons.push(this.person)
  //  this.title=this.person.name;
    //new Person("Kriti Thapa"s,  34,"ramesth@hotmail.com");
   // this.person = new Person(value.name, value.email, value.age);
   // var headers = new Headers();
   // headers.append('Content-Type', 'application/json');
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //if (value) {
    //  this.persons.push(this.person);
    //}
   // this.counter++;
  // this.submitted = true;

   
//this.http.post('http://localhost:3000/users',JSON.parse(JSON.stringify(this.person)), { headers: headers})
//.subscribe();
      
  }
  
}
