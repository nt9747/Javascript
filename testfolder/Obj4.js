var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];
// const key = Object.keys(library);
// console.log(library[0].readingStatus);
function libaryRead(arr) {
  for (let i = 0; i < library.length; i++){
    if (arr[i].readingStatus == true){
      console.log("Already read " + arr[i].title + " by " + arr[i].author);
    }
    else if (arr[i].readingStatus == false){
      console.log("didn't read " + arr[i].title + " by " + arr[i].author);
    }
  }
}
libaryRead(library);