var Student = require('./student.js');
var Main = require('./main.js');

var Bus = function() {
    this.studentsOnTheBus = [];
    this.driverName = "";
    this.color = "";
    this.gas = "";

    this.studentEntersBus = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){

    this.studentsOnTheBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase))

    this.busChatter = function(detentions, gpa, catchPhrase) {
      if((detentions < 10) && (gpa > 2)) {
        console.log(catchPhrase);
      } else {
        console.log("Student still cannot have fun");
      }
    };
  };
};

var rideTheBus = new Bus();

rideTheBus.studentEntersBus('Janet', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Steve', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Kevin', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Matthew', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Kaitlyn', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Mark', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Mary', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Lora', 'female', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Jeff', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');
rideTheBus.studentEntersBus('Chris', 'male', '12', '3.5', 'No', 'Yes', 'Hello World!');

for (var studentsOnTheBus = 0; studentsOnTheBus < 10; studentsOnTheBus++) {
  console.log(rideTheBus.studentsOnTheBus[studentsOnTheBus].name);
}

// Bus.busChatter();

module.exports = Bus;