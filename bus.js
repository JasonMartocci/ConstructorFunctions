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
      var rideTheBus = new Bus();

      rideTheBus.studentEntersBus('Janet', 'female', '12', '1', '2', 'Yes', 'Weeeeeeee');
      rideTheBus.studentEntersBus('Steve', 'male', '12', '2.5', '2', 'Yes', 'I Love Computers');
      rideTheBus.studentEntersBus('Kevin', 'male', '12', '3.5', '2', 'Yes', 'Be kind to geeks');
      rideTheBus.studentEntersBus('Matthew', 'male', '12', '1.5', '2', 'Yes', 'Video games save the world.');
      rideTheBus.studentEntersBus('Kaitlyn', 'female', '12', '3.5', '2', 'Yes', 'I love to read.');
      rideTheBus.studentEntersBus('Mark', 'male', '12', '4.5', '2', 'Yes', 'Hello World!');
      rideTheBus.studentEntersBus('Mary', 'female', '12', '1.5', '2', 'Yes', 'What are you doing?');
      rideTheBus.studentEntersBus('Lora', 'female', '12', '3.5', '2', 'Yes', 'Work Work Work Work...');
      rideTheBus.studentEntersBus('Jeff', 'male', '12', '3.2', '2', 'Yes', 'Lets get it on.');
      rideTheBus.studentEntersBus('Chris', 'male', '12', '2.5', '2', 'Yes', 'Good Bye');

      for (var studentsOnTheBus = 0; studentsOnTheBus < 10; studentsOnTheBus++) {
        console.log("-----------------------------------");

        if((rideTheBus.studentsOnTheBus[studentsOnTheBus].detentions < 10) && (rideTheBus.studentsOnTheBus[studentsOnTheBus].gpa > 2)) {
          console.log(rideTheBus.studentsOnTheBus[studentsOnTheBus].name + " " + rideTheBus.studentsOnTheBus[studentsOnTheBus].catchPhrase);
          } else {
          console.log(rideTheBus.studentsOnTheBus[studentsOnTheBus].name + " " + "still cannot have fun");
        }
      }
    };
  };
};

module.exports = Bus;