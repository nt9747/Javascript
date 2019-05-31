var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
function delStudent(Object, property) {
  delete Object[property];
  console.log(Object);
};
function showStudent(Object){
console.log(Object);
}
showStudent(student);
delStudent(student, "rollno");

