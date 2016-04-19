var Bus = require('./bus.js');
var Student = require('./student.js');
var prompt = require('prompt');

var school = new Bus();

// var studentOne = new Student();
// var studentTwo = new Student();
// var studentOne = new Student();
// var studentOne = new Student();
// var studentOne = new Student();
// var studentOne = new Student();
// var studentOne = new Student();
// var studentOne = new Student();
// var studentOne = new Student();
// var studentOne = new Student();

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
  // console.log(result);
  var s = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  // console.log("this is me" + JSON.stringify(s));
  // console.log("this is me2" + JSON.parse(s));

  school.studentEntersBus(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  s.canStudentHaveFun();

  school.busChatter(result.gpa, result.detentions, result.catchPhrase);
});