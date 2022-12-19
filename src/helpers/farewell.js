const farewell = () => {
  const prefix = '--username=';
  let userName = 'Nameless';
  const argument = process.argv
    .slice(2)
    .filter(item => item.startsWith(prefix))[0];

  if (argument) {
    userName = argument.split('=')[1];
  }

  const farewellString = `\nThank you for using File Manager, ${userName}, goodbye!`;

  console.log(farewellString);
};

export default farewell;
