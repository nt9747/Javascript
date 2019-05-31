var str = 'meo , meo.meo, cut    -n';
var sstr1 = str.toLowerCase();
spArr = [' ', '.', ',', ';', ';', '?', '!', '-'];
str1 = str.split("");
let checkSp = function (character) {
  for (let i = 0; i < spArr.length; i++) {
    if (character = spArr[i]) {
      return true;
    }
  }
}
console.log(checkSp(","));

