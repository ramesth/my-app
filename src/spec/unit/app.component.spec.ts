import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../app/app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {Person} from '../../app/person'

describe('AppComponent', () => {
  let comp:AppComponent;
  let fixture:ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    comp=fixture.componentInstance;
  });

  it('should create the app', async(() => {
    //const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
     expect(comp.title).toEqual('app');
  }));
  it('should name has default age', async(() => {
     expect(comp.age).toEqual(10);
  }));
  it('should name has default email', async(() => {
    expect(comp.email).toEqual("zzz@ssss.com");
 }));

});
