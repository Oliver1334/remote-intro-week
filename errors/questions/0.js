try {
  const letters = "abc";
  letters(); // type error not a function
} catch (error) {
  console.log(error, "<--- error");
}
