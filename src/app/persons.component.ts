
import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs/Rx'
import { UsersComponent } from './users.service';
import {IPerson} from "./interfaces";

@Component({
    selector: 'app-customers',
    template: 'ddd',
    //'ul><li *ngFor="let t of persons|async"> ioi </ul>',
    //<ul><li *ngFor="let t of persons|async"> ioi[t] </ul>'
    //template:'<h3> hello{{title}} {{subtitle}} </h3>'
    providers:[UsersComponent]
})
export class PersonsComponent implements OnInit {
    //persons: IPerson[]=[];
    //person: Observable<any[]>;
    persons:Person[];
   // private _customerService: CustomerService;
    // @Input()  subtitle = '';
    // title = 'NgModules';
    constructor(private _customerService: UsersComponent)
    {
        
    }
    ngOnInit() {
         this.getPerson();
       //this.cust = this._customerService.getWhat();
    }
    getPerson()
    {
        this._customerService.getUser()
        .subscribe((persons:Person[])=>{
        this.persons=persons;
        },
        (err:any)=>console.log(err));
    }
    getAllGrocery(){
		this._customerService.getUser().subscribe(res =>{
			this.persons  = []
			res.json().data.map(e => {
				this.persons.push(new Person(e.name));
			})
        })
    }
}
