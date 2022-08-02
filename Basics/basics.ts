let userName:string = "Krishna";
let isLoggedIn:boolean = true;

userName += " Kireeti";

console.log(userName);

let number:number = 100;

let myRegExp:RegExp = /foo/;

//Arrays
const names:string[] = userName.split(" ");

//Generic Arrays
const numbers:Array<number> = [1,2,4,10]

//Objects

interface Person {
    first:string,
    last:String,
    age:number
}

const myPerson:Person = {
    first : "Krishna",
    last : "Kireeti",
    age:26
}


//maps with utility type

const ids : Record<number,string> = {
    10 : "abc",
    20 : "cdf"
}

ids[30] = "efg"


//conditions and expressions

// if(ids[30]===2){            // fails as string is compared to number
 
// }


if(ids[30]==="as"){ //type checking is success but logic fails
    console.log(ids[30]);
}


[1,2,3].forEach((v)=>console.log(v));

const outNums:number[] = [4,5,6].map((v)=>v*10);


