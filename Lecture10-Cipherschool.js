let person={
    firstName : "Jim" ,
    lastName: "Harlpet",

    getFullName:function() {
        return `The name of the person is ${person.firstName} ${person.lastName}`
<<<<<<< HEAD
    };
=======
    },
>>>>>>> cc2151fe11ef916ce1718a4ed026c496a310a3e3
phoneNumber:{
<<<<<<< HEAD
    mobile: 3434342;
    landline: f
=======
    mobile: "3434342",
    landline: "67567"
},

};

console.log(person.getFullName());
console.log(person.phoneNumber.landline);


function personm(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

>>>>>>> cc2151fe11ef916ce1718a4ed026c496a310a3e3
}
let person1=new personm("Shantanu","Shubham");
let person2=new personm("Pam","beesley");

console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`);

const coder={
    isstudying:false,
    printintro: function() {
        console.log(`My name is ${this.name}. Am i Studying ? ${this.isstudying}`);
    }

}

const me= new Object(coder)
me.name="Jim"
me.isstudying=true;

me.printintro();

class vehicle{
    constructor (name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
        }
        getDetails(){
            return`The name of vehical is ${this.name}`
        }
}

let v1=new vehicle("Creta","Hyundai","2500cc")
let v2=new vehicle("Q5","Audi","4333cc")

console.log(v1.name);
console.log(v1.maker);
console.log(v1.getDetails());
console.log(v2.name);
console.log(v2.maker);
console.log(v2.getDetails());



class prson {
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    getDetails=function(){
        return `First name is: ${this.firstName} and lastname is: ${this.lastName}`
    }
 }  
   class Student extends prson{

        constructor(firstName, lastName, rollno){
            super(firstName,lastName)
            this.rollno=rollno
        }

        getDetails=function(){
            return `the roll no is ${this.rollno }`
        }

    }

    let person3=new prson("Dwight","Micheal")
    console.log(person3.firstName);
    console.log(person3.getDetails());

    let Student1=new Student("Ryan","Ghosling",24)
    console.log(Student1.getDetails());