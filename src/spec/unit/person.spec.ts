import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Person } from '../../app/person';

describe('Person Component', () => {
  let fixture ;
  let comp:Person;
  
  beforeEach(async(() => {
    comp=new Person("sdf",20,"asdfasdf");
  }));



  it('should create a person',function(){
    
    expect(comp).toBeTruthy();
    });

    it('age should be',function(){
    expect(comp.age).toEqual(20);
    });

    it ("check age 0 should return false", function(){
      expect(comp.verifyAge(0)).toBeFalsy();

    });
    it ("check age 100 should return true", function(){
      expect(comp.verifyAge(100)).toBeTruthy();

    });
    it ("check age 200 should return false", function(){
      expect(comp.verifyAge(200)).toBeFalsy();

    });
  });

 

  
