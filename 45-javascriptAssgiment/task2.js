var person = "danish khan";
// to lower case
console.log(person.toLowerCase());
// to upper case
console.log(person.toUpperCase());

// to tittle case
var personLowerSplit = person.toLowerCase().split(" ");
for (let i = 0; i < personLowerSplit.length; i++) {
  personLowerSplit[i] =
    personLowerSplit[i].charAt(0).toUpperCase() + personLowerSplit[i].slice(1);
  var tittleCase = personLowerSplit.join(" ");
}
console.log(tittleCase);
