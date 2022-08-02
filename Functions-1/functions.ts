function addNumbers(a:number,b:number):number{
    return a+b;
}

export default addNumbers;

export const addStrings = (str1:string,str2:string=""):string => `${str1} ${str2}`;

//union type 

export const format = (title:string,param:string | number):string => `${title} ${param}`;

//void return type

export const printFormat = (title:string,param:string | number):void=> console.log(`${title} ${param}`);

//return promise

export const fetchData = (url:string): Promise<string> => Promise.resolve(`Data from ${url}`);


//rest params

export const introduce = (salutation:string,...names:string[]):string => `${salutation} ${names.join(" ")}`;

// typescript always checks at compile-time but not at run-time