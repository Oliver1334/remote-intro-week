const phoneBook = {
  anat: "+44981513462",
  sam: "+44981513419",
  shaq: "+4498674321",
};

const name = "anat";
const anatPhoneNo = phoneBook.name;

console.log(anatPhoneNo);

// What will happen when this file is executed with Node? error undefined
// What is the problem with this code? name is equalling to a string anat, rather than the key anat in the phoneBook object
