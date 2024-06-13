var x=15;
{
    let x=3
    console.log(x);
}
console.log(x);
// const x=5 //we can't change the value of const

const q1=["Jan", "Feb", "Mar"]
const q2=["Apr", "May", "Jun"]
const q3=["Jul", "Aug", "Sep"]
const q4=["Oct", "Nov", "Dec"]

const yr=[...q1,...q2,...q3,...q4]

console.log(yr);

const numbers=[24,22,12,43,67,89]
let maxvalue=Math.max(...numbers)

console.log(maxvalue);

const fruits= new Map([["apples",100],["Mango",80],["orange",40]])
console.log(fruits);
console.log(fruits.get("apples"));

class car{
    constructor(name,mfgyr){
        this.name=name
        this.mfgyr=mfgyr
    }
}

const mycar1=new car("mercedes",2022)
const mycar2=new car("Audi",2020)

console.log(mycar1,mycar2);

const myfunction=() =>{
return new Promise((resolve, reject) =>
{
    setTimeout(() => {
        console.log("This is inside Promise");
        resolve();
    }, 2000);
})

}

myfunction()
.then(()=>{
    console.log("Resolved");
})
.catch(() =>{
    console.log("Rejected");
})


const addNumbers=(...args) => {
    let sum=0;
    for(let arg in args){
    sum+=args
    }
    return sum;
}
console.log(addNumbers(10,232,3232,23232,23))
