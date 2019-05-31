function varrr() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  return x;
}
function lettt() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  return x;
};
console.log(varrr());
console.log(lettt());