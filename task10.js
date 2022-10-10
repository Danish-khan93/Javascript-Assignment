// i have use in this console tamplte litral `${ } to concat the string

var person = "Danish khan";
console.log(`Hello ${person}, would you like to learn some Python today?`);

//  i use trim methode to remove white spaces and replace methode to remove line break \n

let person3 = "      \tdanish\nkhan";
console.log(person3);
let person2 = person3.trim().replace("\n", " ");
console.log(person2);
