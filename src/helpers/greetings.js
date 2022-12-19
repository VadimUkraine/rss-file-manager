const greetings = () => {
  const prefix = '--username=';
  let userName = 'Nameless';
  const argument = process.argv
    .slice(2)
    .filter(item => item.startsWith(prefix))[0];
      
  if (argument) {
    userName = argument.split('=')[1];
  }

  const greetingsString = `Welcome to the File Manager, ${userName}!`;

  console.log(greetingsString);
};

export default greetings;
