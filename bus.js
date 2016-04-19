var Student = require('./student.js');

var Bus = function() {
  this.studentsOnTheBus = [];
  this.driverName = "";
  this.color = "";
  this.gas = "";

  this.studentEntersBus = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase) {
    console.log("Student Enters Bus");
  };

  this.busChatter = function(detentions, gpa, catchPhrase) {
    if((detentions < 10) && (gpa > 2)) {
      console.log(catchPhrase);
    } else {
      console.log("Student still cannot have fun");
    }
  };
};
// var busCreator = new Bus(result.driverName, result.color, result.gas);    
//   fs.appendFile('busLog.txt', JSON.stringify(busCreator) + '\r\n', 'utf8', function(error){
//     if(error) throw error
//     else{console.log("Bus created");}
//   });

module.exports = Bus;