var Student = require('./student.js');
var prompt = require('prompt');


prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
  // console.log(result);
  var s = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  // console.log("this is me" + JSON.stringify(s));
  // console.log("this is me2" + JSON.parse(s));
  s.canStudentHaveFun();
});