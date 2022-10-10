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
