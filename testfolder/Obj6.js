var a = "dog";
console.log(a.length);
function showKw(str) {
  let show = new Array();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++){
      show.push(str.slice(i, j));
    }
  }
  return show;
}
console.log(showKw("dog"));