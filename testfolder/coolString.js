function coolString(inputString) {
  inputString = inputString.split("");
  for (let i = 0; i < inputString.length; i++) {
      if (!(inputString[i] == inputString[i].toLowerCase() && inputString[i+1] == inputString[i+1].toUpperCase())){
          return false;
      }
  }
  return true;
}
console.log(coolString("aaaaaaaaaa"))
