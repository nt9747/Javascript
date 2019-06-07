function isIPv4Address(inputString){
  let fl = true;
  if (inputString.length < 1 || inputString.length > 30){
    fl = false;
  }
  let arr = inputString.split(".");
  if (arr.lenght < 4){
    fl = false;
  } 
  for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])){
      fl = false;
    }
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0 || arr[i] > 255 || arr[i] == ""){
      fl = false;
    }
  }
  return inputString;

}
console.log(isIPv4Address("1"))
