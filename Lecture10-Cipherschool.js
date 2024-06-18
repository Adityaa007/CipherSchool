let person={
    firstName : "Jim" ,
    lastName: "Harlpet",

    getFullName:function() {
        return `The name of the person is ${person.firstName} ${person.lastName}`
    },
phoneNumber:{
    mobile: "3434342",
    landline: "67567"
},

};

console.log(person.getFullName());
console.log(person.phoneNumber.landline);


function personm(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

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