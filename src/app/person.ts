export class Person {
	name:String;
	age:Number;
	email:String;
	constructor(n:String,a:Number,e:String)
	
	{  this.name=n;
	   this.age=a;
	   this.email=e;
	}
	public verifyAge(iage:Number)
	{
		if (iage >0 && iage <=120)
		return true;
		else 
		return false;
	}
	
}