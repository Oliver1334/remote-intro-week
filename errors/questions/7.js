try {
  const name = "jonny";
  name.push("apple");     //type error, jonny is a string not an array/object
} catch (error) {
  console.log(error);
}
