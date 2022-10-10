let friend = ["Azhar", "Rehan", "Faizan", "Hamza", "Mansab", "Azam"];
let lessInvitation = "i have to invite only two person for dinner ";
console.log(lessInvitation);
// for loop for itration and using pop methode for remove the person from the and of the array
for (let i = 0; i < friend.length + 1; i++) {
  console.log(friend.pop() + " " + "sorry i can not invite you for dinner ");
}
// last list of friend
console.log(friend);
// send massege to the last to person in the list using forEach
friend.forEach((sendingInvitation) => {
  console.log(`${sendingInvitation} you are still invited for dinner `);
});
friend.pop();
console.log(friend);
friend.pop();
console.log(friend);
