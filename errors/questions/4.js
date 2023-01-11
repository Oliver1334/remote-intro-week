try {
  let person;
  person.name;        //type error, cannot access name properties as person isn't an object
} catch (error) {
  console.log(error);
}
