//in task 16 print the how many people i invited
let friend = ["Rehan", "Azam", "Mansab"];
let invitation = "I wolud like to invite you in dinner ";
// the person dont make it
let personNotcome = friend.slice(1, 2);
console.log(personNotcome);
// changing in list
friend.splice(1, 1, "Hamza");
friend.forEach((completeInvitation) => {
  console.log(completeInvitation + " " + invitation);
});
let newMassage = "I have to inform you that i found a bigger Dinner table ";
friend.forEach((newInvitation) => {
  console.log(`${newInvitation} ${newMassage}`);
});
// adding a person in start
friend.unshift("Azhar");
console.log(friend);
// adding a person in middle
friend.splice(2, 0, "Faizan");
console.log(friend);
// adding aperson in the end
friend.push("Azam");
console.log(friend);
// sending invetation to the person of list
friend.forEach((completeInvitation) => {
  console.log(completeInvitation + " " + invitation);
});
// find the total invitation
console.log(friend.length + " " + "friend i invited in dinner");
