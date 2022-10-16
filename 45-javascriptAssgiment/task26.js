let alien_color = ["Green", "yellow", "red"];
for (let i = 0; i < alien_color.length; i++) {
  if (alien_color[i] === "Green") {
    console.log("The earnd 5 points for shoot down the Green Alien ");
    console.log(alien_color[i] === "Green");
  } else if (alien_color[i] === "yellow") {
    console.log("The earnd 10 points for shoot down the yellow Alien ");
    console.log(alien_color[i] === "yellow");
  } else if (alien_color[i] === "red") {
    console.log("The earnd 10 points for shoot down the red Alien ");
    console.log(alien_color[i] === "red");
  } else {
    console.log("The player dont shoot any alien earn 0 point ");
  }
}
// run else block
let alien_color1 = "Green";
if (alien_color1 === "Green") {
  console.log("The earnd 5 points for shoot down the Green Alien ");
  console.log(alien_color1 === "Green");
} else alien_color1 === "Yellow";
{
  console.log("The player dont shoot yellow color alien earn 0 point");
  console.log(alien_color1 === "Yellow");
}
