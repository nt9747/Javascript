let inArr = [1, 3, 4, 7, 4, 5, 4, 1, 7, 3, 3];
let outArr = [];
Array.prototype.searchNumberA = function () {
  let center;
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] < this[j]) {
        center = this[i];
        this[i] = this[j];
        this[j] = center;
      }
    }
  }
  let obj = new Object;
  for (let i = 0; i < this.length; i++) {
    let key = this[i];
    if (obj[key]) {
      obj[key].push(this[i]);
    } else {
      obj[key] = [];
      obj[key].push(this[i]);
    }
  }
  let keys = Object.keys(obj);
  for (let key of keys) {
    obj[key] = [parseInt(key), obj[key].length];
    outArr.push(obj[key]);
  }
  return outArr;
}
console.log(inArr.searchNumberA());


Array.prototype.searchNumberB = function () {
  let k;
  for (let i = 0; i < outArr.length; i++) {
    for (let j = i + 1; j < outArr.length; j++) {
      if (outArr[i][1] > outArr[j][1]) {
        k = outArr[i];
        outArr[i] = outArr[j];
        outArr[j] = k;
      }
      else if (outArr[i][1] == outArr[j][1]) {  
        if (i > j) {
          k = outArr[i];
          outArr[i] = outArr[j];
          outArr[j] = k;
        }
      }
    }
  }
  return outArr;
}

console.log(outArr.searchNumberB());