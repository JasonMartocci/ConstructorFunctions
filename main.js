var Bus = require('./bus.js');
var Student = require('./student.js');
var prompt = require('prompt');


prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
  // console.log(result);
  var s = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  // console.log("this is me" + JSON.stringify(s));
  // console.log("this is me2" + JSON.parse(s));
  s.canStudentHaveFun();
});



// var promptBus = require('prompt');



// promptBus.get(['studentEntersBus', 'studentsOnTheBus', 'driverName', 'color', 'gas'], function(err, result){

//   var s = new Bus(result.studentEntersBus, result.studentsOnTheBus, result.driverName, result.color, result.gas);

//   s.studentEntersBus();
//   s.busChatter();
// });