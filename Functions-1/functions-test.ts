import addNumbers,{addStrings,format,fetchData} from "./functions";

console.log(addNumbers(1,2));
console.log(addNumbers(2,4));

console.log(addStrings("Krishna","Kireeti"));
console.log(addStrings("Jack"));

console.log(format("Hello","Jack"));
console.log(format("Hi",45));


console.log(fetchData("http://localhost:3000"));