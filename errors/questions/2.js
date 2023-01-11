try {
  const name = "mitch";
  name = "Izzi";                // type error, trying to reassign a const value
} catch (error) {
  console.log(error);
}
