function make_shirt(anySize) {
  for (let i = 0; i < anySize.length; i++) {
    if (anySize[i] === "small") {
      console.log(`shirt size ${anySize[i]} and print I love javascript `);
    }
    if (anySize[i] === "medium") {
      console.log(`shirt size ${anySize[i]} and print I love c++ `);
    }
    if (anySize[i] === "large") {
      console.log(`shirt size ${anySize[i]} and print I love php `);
    }
  }
}
make_shirt(["small", "medium", "large"]);
