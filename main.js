var Bus = require('./bus.js');
var Student = require('./student.js');
var prompt = require('prompt');

var school = new Bus();

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
	var s = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

	s.canStudentHaveFun();

	school.studentEntersBus(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

	school.busChatter(result.gpa, result.detentions, result.catchPhrase);
});