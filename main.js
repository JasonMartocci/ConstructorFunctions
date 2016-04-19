var Bus = require('./bus.js');
var Student = require('./student.js');
var prompt = require('prompt');

var school = new Bus();

var studentOne = new Student('Janet', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!', school.busChatter);
var studentTwo = new Student('Steve', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentThree = new Student('Kevin', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentFour = new Student('Matthew', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentFive = new Student('Kaitlyn', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentSix = new Student('Mark', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentSeven = new Student('Mary', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentEight = new Student('Lora', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentNine = new Student('Jeff', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
var studentTen = new Student('Chris', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');

console.log(studentOne);

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
  // console.log(result);
  var s = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  // console.log("this is me" + JSON.stringify(s));
  // console.log("this is me2" + JSON.parse(s));

  school.studentEntersBus(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  s.canStudentHaveFun();

  school.busChatter(result.gpa, result.detentions, result.catchPhrase);
});