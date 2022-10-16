let username = ["Azam", "Danish", "Rehan", "admin", "Mansab"];
// adding the 4 in length due to continue the loop until the list is empty
for (let i = 0; i < username.length + 4; i++) {
  username.pop(i);
  console.log(username);
  if (username.length === 0) console.log("we need to find some user");
}
